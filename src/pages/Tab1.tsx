import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardContent, 
  IonCardTitle,
} from '@ionic/react';
import { useState } from 'react';
import { Deploy } from 'cordova-plugin-ionic';
import { Capacitor } from '@capacitor/core';
import { Device } from '@capacitor/device';
import { Filesystem, Directory } from '@capacitor/filesystem';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [updateAvailable, setUpdateAvailable] = useState({available: false, id: ''});
  const [downloadProgress, setDownloadProgress] = useState({ progress: 0, error: ''})
  const [extractProgress, setExtractProgress] = useState({ progress: 0, error: ''})
  const [reloaded, setReloaded] = useState(false);

  const platform = Capacitor.getPlatform() || 'unknown'
  const version = 1;

  const check = async () => {
    try {
      setReloaded(false);
      const update = await Deploy.checkForUpdate();
      if (update?.available && update?.snapshot) setUpdateAvailable({available: true, id: update.snapshot});
    } catch (e) {
      console.log(e);
    }
  }

  const download = async () => {
    try {
      setReloaded(false);
      if (updateAvailable.available) {
        await Deploy.downloadUpdate((prog) => setDownloadProgress({ progress: prog || 0, error: ''}));
        console.log(downloadProgress);
        return;
      }
      setDownloadProgress({ progress: 0, error: 'No update available.'});
    } catch (e) {
      console.log(e)
    }
  }

  const extract = async () => {
    try {
      setReloaded(false);
      if (updateAvailable.available) {
        await Deploy.extractUpdate((prog) => setExtractProgress({ progress: prog || 0, error: ''}));
        console.log(extractProgress);
        return;
      }
      setExtractProgress({ progress: 0, error: 'No update downloaded.'});
    } catch (e) {
      console.log(e)
    }
  }

  const reload = async () => {
    try {
      await Deploy.reloadApp();
      setReloaded(true);
    } catch (e) {
      console.log('Failed to reload app.');
    }
  }

  const ping = async () => {
    try {
      await fetch('https://capstone-test.requestcatcher.com/')
    } catch (e) {
      console.log(e)
    }
  }

  const deleteUpdates = async () => {
    try {
      const { platform } = await Device.getInfo()

      const getBasePath = async (platform: string) => {
        if (platform === 'ios' || platform === 'android') {
          return `NoCloud/ionic_built_snapshots/*`
        }
        return null
      }

      const path = await getBasePath(platform)
      if (!path) return;

      await Filesystem.deleteFile({
        path: path,
        directory: Directory.Library,
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Version {version} - {platform}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Version {version}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Check for Updates</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>          
            { updateAvailable?.available && <div style={{ display: 'flex', justifyContent: 'center'}}>{updateAvailable.id} is available!</div> }
            <IonButton onClick={(e) => check()} style={{ display: 'flex', justifyContent: 'center'}}>
              Check
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Download Update</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>          
            { downloadProgress?.progress > 0 && <div style={{ display: 'flex', justifyContent: 'center'}}>{downloadProgress.progress}% downloaded.</div> }
            { downloadProgress?.error && <div style={{ display: 'flex', justifyContent: 'center'}}>{downloadProgress.error}</div> }
            <IonButton onClick={() => download()} style={{ display: 'flex', justifyContent: 'center'}}>
              Download
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Extract Update</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>          
            { extractProgress?.progress > 0 && <div style={{ display: 'flex', justifyContent: 'center'}}>{extractProgress.progress}% extracted.</div> }
            { extractProgress?.error && <div style={{ display: 'flex', justifyContent: 'center'}}>{extractProgress.error}</div> }
            <IonButton onClick={() => extract()} style={{ display: 'flex', justifyContent: 'center'}}>
              Extract
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Reload App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            { reloaded && <div style={{ display: 'flex', justifyContent: 'center'}}>Reloaded.</div> }
            <IonButton onClick={() => reload()} style={{ display: 'flex', justifyContent: 'center'}}>
              Reload
            </IonButton>
          </IonCardContent>
        </IonCard>
  
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Ping capstone-test.requestcatcher.com</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>          
            <IonButton onClick={() => ping()} style={{ display: 'flex', justifyContent: 'center'}}>
              Ping
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Delete live update</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>          
            <IonButton onClick={() => deleteUpdates()} style={{ display: 'flex', justifyContent: 'center'}}>
              Delete
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

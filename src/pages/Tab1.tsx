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
import { sync, reload } from '@capacitor/live-updates';
import './Tab1.css';

const Tab1: React.FC = () => {  
  const [update, setUpdate] = useState('')
  const [reloaded, setReloaded] = useState(false);

  const version = 1;

  const syncLiveUpdate = async () => {
    try {
      setReloaded(false);
      const availableUpdate = await sync()
      console.log(availableUpdate)

      if (availableUpdate) {
        setUpdate(JSON.stringify(availableUpdate, null, 2))
      }
    } catch (e) {
      console.log(e)
    }
  }

  const reloadApp = async () => {
    try {
      await reload();
      setReloaded(true);
      setUpdate('')
    } catch (e) {
      console.log('Failed to reload app.');
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Version {version}</IonTitle>
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
            <IonCardTitle>Sync</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>          
            { update && <div style={{ display: 'flex', justifyContent: 'center'}}><pre>{update}</pre></div> }
            <IonButton onClick={(e) => syncLiveUpdate()} style={{ display: 'flex', justifyContent: 'center'}}>
              Sync 
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Reload App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            { reloaded && <div style={{ display: 'flex', justifyContent: 'center'}}>Reloaded.</div> }
            <IonButton onClick={() => reloadApp()} style={{ display: 'flex', justifyContent: 'center'}}>
              Reload
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

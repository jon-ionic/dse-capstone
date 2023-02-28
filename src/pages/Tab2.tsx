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
  IonCardTitle 
} from '@ionic/react';
import { useState } from 'react'; 
import './Tab2.css';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';

const Tab2: React.FC = () => {

  const [location, setLocation] = useState('');
  const [deviceInfo, setDeviceInfo] = useState('');

  const setCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates?.coords?.latitude?.toFixed(4)?.toString()
      const long = coordinates?.coords?.longitude?.toFixed(4)?.toString()
      setLocation(`${lat}, ${long}`)
    } catch (e) {
      console.log(e)
      setLocation('There was an error.')
    }
  };

  const fetchDeviceInfo = async () => {
    try {
      const info = await Device.getInfo();
      setDeviceInfo(`Model: ${info?.model}\nOS: ${info?.operatingSystem}\nVersion: ${info?.osVersion}`)
      console.log(info)
    } catch (e) {
      console.log(e)
      setDeviceInfo('There was an error.')
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Geolocation</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              { location }
            </div>
            <IonButton onClick={() => setCurrentPosition()} style={{ display: 'flex', justifyContent: 'center'}}>
              Get Position
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Device</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div>
              { deviceInfo && deviceInfo?.split('\n')?.map((i) => <li key={i}>{i}</li>) }
            </div>
            <IonButton onClick={() => fetchDeviceInfo()} style={{ display: 'flex', justifyContent: 'center'}}>
              Get Device Information
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

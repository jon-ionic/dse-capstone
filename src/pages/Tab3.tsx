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
import { Camera, CameraResultType } from '@capacitor/camera';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Dialog } from '@capacitor/dialog';
import './Tab3.css';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  return image;
};

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

const showAlert = async () => {
  await Dialog.alert({
    title: 'Stop',
    message: 'this is an error',
  });
};

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Camera</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={() => takePicture()} style={{ display: 'flex', justifyContent: 'center'}}>
              Take Picture
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Haptics</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={() => hapticsImpactMedium()} style={{ display: 'flex', justifyContent: 'center'}}>
              Trigger Haptics
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Alert</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={() => showAlert()} style={{ display: 'flex', justifyContent: 'center'}}>
              Trigger Alert
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;

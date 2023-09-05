import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const testXHR = () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typeicode.com/todos/1", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      alert(`XMLHttpRequest.DONE is ${XMLHttpRequest.DONE}`);
    }
  };
  xhr.send();
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => testXHR()}>Test XHR</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

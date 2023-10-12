
// Components
import { Header } from "../../../Components/Header";
import { MessagesComponent } from "./components/messages.component";

export const MessagesScreen = () => {

    document.title = `All Messages (24)`;

    return (
        <div>
            <Header type="Dashboard" />

            <div className="fill__details__cont">
                <h2 className="fill__details__h2">Messages (24)</h2>

                <div className="all__msg__cont">
                    <MessagesComponent />
                    <MessagesComponent />
                    <MessagesComponent />
                </div>
            </div>
        </div>
    )
}

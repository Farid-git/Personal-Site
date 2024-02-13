import {Title} from "@/components/Title";
import {TextBox} from "@/components/TextBox";
import Header from "@/components/Header";

import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


export default function Contacts() {
    return (
      <div className="flex items-center flex-col gap-4">

          <Header activeLink="contacts"/>

          <TextBox>

            <div className="flex items-center space-x-1">
              <FaEnvelope/><p>iraliyevfarid@mail.ru</p>
            </div>

            <div className="flex items-center space-x-1">
              <FaGithub/><a href="https://github.com/Farid-git/" target="_blank" rel="noopener noreferrer">Farid-git</a>
            </div>

              {/*<Image src={icon_mailru} alt="mail.ru" width={32} height={32} />*/}
              {/*<p>iraliyevfarid@mail.ru</p>*/}

              {/*<Image src={icon_github} alt="github.com" width={32} height={32} />*/}
              {/**/}
          </TextBox>
      </div>
    )
}
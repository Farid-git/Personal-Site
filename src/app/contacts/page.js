import {Title} from "@/components/Title";
import {TextBox} from "@/components/TextBox";

export default function Contacts() {
    return (
      <div className="flex items-center flex-col gap-4">

          <Title title="Контакты"/>
          <TextBox>
              <h2>+79275592101</h2>
              <h2>iraliyevfarid@mail.ru</h2>
              <h2>hh.ru</h2>
              <h2>vk.ru</h2>
              <h2>github.com</h2>
          </TextBox>
      </div>
    )
}
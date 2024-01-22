import {Title} from "@/components/Title";
import {TextBox} from "@/components/TextBox";

export default function Resume() {
    return (
      <div className="flex items-center flex-col gap-4">

        <Title title="Резюме"/>
        <TextBox>
          <p>Резюме...</p>
        </TextBox>

      </div>
    )
}
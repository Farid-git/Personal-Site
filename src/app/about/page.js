import {Title} from "@/components/Title";
import {TextBox} from "@/components/TextBox";

export default function About() {

  return (
    <div className="flex items-center flex-col gap-4">
      <Title title="О Себе"/>
      <TextBox>
        <p>Профессиональный опыт: 1.5 года</p>
        <ul>
          <li>- Разработка frontend приложений на React и React Native</li>
          <li>- Разработка backend приложений в PHP 8, PHP 5.6</li>
          <li>- Разработка с БД MySQL</li>
          <li>- Разработка приложений для 1С-Битрикс</li>
          <li>- Администрирование серверов Linux, Windows Server, Хостингов</li>
        </ul>
        <p>Непрофессиональный/учебный опыт:</p>
        <ul>
          <li>- Разработка backend приложений в NodeJS (Микросервисы/Боты)</li>
          <li>- Разработка/правка сайтов на NextJS</li>
          <li>- Разработка C# (WPF, WinForm)</li>
          <li>- Разработка C++ (Микроконтроллеры)</li>
          <li>- Разработка Android приложений на Kotlin</li>
          <li>- Администрирование PMIS YouTrack</li>
        </ul>
        <p>Интерес к изучению:</p>
        <ul>
          <li>- JS Фреймворки</li>
          <li>- .NET</li>
          <li>- Golang</li>
          <li>- Godot</li>
        </ul>
      </TextBox>
    </div>
  )
}
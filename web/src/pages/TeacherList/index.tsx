import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/58398694?s=460&u=9da1f6aa4ba89dc48911597e6ecef8a37955caab&v=4"
          name="Pedro Monteiro"
          subject="Programação"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        inventore molestias, magnam veniam quibusdam distinctio beatae vero modi
        velit quia sequi cupiditate minus iste voluptatem! Vel fugiat optio
        tempora culpa?"
          price="100"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/58398694?s=460&u=9da1f6aa4ba89dc48911597e6ecef8a37955caab&v=4"
          name="Pedro Monteiro"
          subject="Programação"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        inventore molestias, magnam veniam quibusdam distinctio beatae vero modi
        velit quia sequi cupiditate minus iste voluptatem! Vel fugiat optio
        tempora culpa?"
          price="100"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/58398694?s=460&u=9da1f6aa4ba89dc48911597e6ecef8a37955caab&v=4"
          name="Pedro Monteiro"
          subject="Programação"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        inventore molestias, magnam veniam quibusdam distinctio beatae vero modi
        velit quia sequi cupiditate minus iste voluptatem! Vel fugiat optio
        tempora culpa?"
          price="100"
        />
      </main>
    </div>
  );
};

export default TeacherList;

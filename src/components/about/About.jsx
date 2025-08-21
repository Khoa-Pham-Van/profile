import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GrDocumentPdf } from "react-icons/gr";
import PDF from "../../assets/Job-Application-Form-Jasonlim.pdf";
import ProfileCard from "../avt/Avatar";

const About = () => {
  return (
    <section id="about">
      <h5></h5>
      <h2>Giới thiệu</h2>

      <div className="container about__container">
        <ProfileCard
          name="Pham Van Khoa"
          title="Data Analysis"
          handle="vankhoa"
          status="Online"
          contactText="Liên hệ"
          avatarUrl={ME}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Kinh nghiệm</h5>
              <small>1 năm kinh nghiệm</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Khách hàng</h5>
              <small>0</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Dự án</h5>
              <small>+2 dự án </small>
            </article>
          </div>
          <p>
            <h3 style={{ color: 'red' }}>Xin chào!<br /> Tôi là Khoa, sinh năm 2004.</h3>
            Hiện đang theo học tại Đại học FPT chuyên ngành AI. Tôi là một lập trình viên trẻ đầy nhiệt huyết, luôn mong muốn học hỏi và phát triển bản thân trong lĩnh vực công nghệ thông tin.<br />

            Mục tiêu phát triển:<br />

            Ngắn hạn: Hoàn thiện kỹ năng lập trình, tích lũy thêm kinh nghiệm thực tế thông qua các dự án và cơ hội thực tập.<br />

            Dài hạn: Trở thành một chuyên gia trong lĩnh vực Data Science đóng góp vào các sản phẩm công nghệ có giá trị cho cộng đồng.<br />

          </p>
          <a href={PDF} className="btn btn-primary">
            Tải PDF <GrDocumentPdf />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./style.css";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import FacebookImg from "../../assets/icons/facebook.png";
import TwitterImg from "../../assets/icons/twitter.png";
import TelegramImg from "../../assets/icons/telegram.png";
import InstagramImg from "../../assets/icons/instagram.png";
import YoutubeImg from "../../assets/icons/youtube.png";
import PinterestImg from "../../assets/icons/pinterest.png";
import BgIconImg from "../../assets/icons/Group.svg";
import MapImg from "../../assets/icons/map.png";
import { CgArrowTopRight } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPlay, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import FirstGallery from "../../assets/icons/gallery-1.png";
import SecondGallery from "../../assets/icons/gallery-2.png";
import ThirdGallery from "../../assets/icons/gallery-3.png";
import { FaCalendar } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import FirstPartner from '../../assets/icons/partner-1.png'
import SecondPartner from '../../assets/icons/partner-2.png'
import ThirdPartner from '../../assets/icons/partner-3.png'
import Links from "../../components/links/Links";

const Home = () => {
  return (
    <div className="page home-page">
      <section className="section_one">
        <div className="overlay">
          <div className="top_object">
            <div className="left">
              <p>Eng yaxshi meroslar</p>
              <h2>
                TV channels and <br /> movies wherever <br /> there is <br />{" "}
                internet!
              </h2>
              <button className="more">Batafsil</button>
            </div>
            <div className="right"> 
              <Links/>
            </div>
          </div>
          <div className="slider_btns">
            <button>
              <GrPrevious />
            </button>
            <button>
              <MdNavigateNext />
            </button>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="btns">
          <button>NMM MILLIY RO'YXATI</button>
          <button className="active">
            YUNESKONING REPREZENTATIV OB'EKTLARI
          </button>
          <button>YUNESKO TOMONIDAN KO'RIB CHIQILAYOTGAN OB'EKTLAR</button>
        </div>

        <div className="cards">
          <div className="card">
            <img src="https://picsum.photos/300/300" alt="image" />
            <div className="right">
              <div className="top">
                <h3 className="title">Boysun tumanining madaniy muhiti</h3>
                <p>
                  Nomzodnoma: Nomzodnoma hujjati Oʼzbekiston tomonidan taqdim
                  qilingan Qaror: Hukumatlararo qoʼmitaning 3.COM sonli qarori
                  Kiritilgan yil: 2008 y. Nomzodnoma hujjati (YuNESKO): Havola
                </p>
              </div>
              <button className="bottom_btn">Batafsil</button>
            </div>
          </div>
        </div>
        <ul className="dots">
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className="section-three">
        <h2 className="heading">NOMODIY MADANIY MEROS FILIALLARI</h2>
        <div className="contents">
          <div className="left">
            <img src={MapImg} />
          </div>
          <div className="right">
            <h4 className="title">Toshkent shahri</h4>
            <div className="statistic">
              <div>
                <p>Nomoddiy Madaniy Meros</p>
                <h3>1</h3>
              </div>
              <div>
                <p>Nomoddiy Madaniy Meros</p>
                <h3>87.2%</h3>
              </div>
              <div>
                <p>Nomoddiy Madaniy Meros</p>
                <h3>46</h3>
              </div>
              <div>
                <p>Nomoddiy Madaniy Meros</p>
                <h3>1 446</h3>
              </div>
            </div>
            <button className="bottom_btn">Batafsil</button>
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="top">
          <h2>HABARLAR</h2>
          <button>BARCHA HABARLAR</button>
        </div>
        <p className="last_news">ENG YANGI HABARLAR</p>
        <div className="news">
          <div className="new-card">
            <div className="top">
              <div className="left">
                <img src="https://picsum.photos/248/128" alt="rams" />
              </div>
              <div className="right">
                <div className="head">
                  <p className="media">MEDIA</p>
                  <p className="date">August 10, 2023</p>
                </div>
                <p className="text">
                  BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                </p>
              </div>
            </div>
            <button className="bottom_btn">BATAFSIL</button>
          </div>
          <div className="new-card">
            <div className="top">
              <div className="left">
                <img src="https://picsum.photos/248/128" alt="rams" />
              </div>
              <div className="right">
                <div className="head">
                  <p className="media">MEDIA</p>
                  <p className="date">August 10, 2023</p>
                </div>
                <p className="text">
                  BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                </p>
              </div>
            </div>
            <button className="bottom_btn">BATAFSIL</button>
          </div>
          <div className="new-card">
            <div className="top">
              <div className="left">
                <img src="https://picsum.photos/248/128" alt="rams" />
              </div>
              <div className="right">
                <div className="head">
                  <p className="media">MEDIA</p>
                  <p className="date">August 10, 2023</p>
                </div>
                <p className="text">
                  BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                </p>
              </div>
            </div>
            <button className="bottom_btn">BATAFSIL</button>
          </div>
          <div className="new-card">
            <div className="top">
              <div className="left">
                <img src="https://picsum.photos/248/128" alt="rams" />
              </div>
              <div className="right">
                <div className="head">
                  <p className="media">MEDIA</p>
                  <p className="date">August 10, 2023</p>
                </div>
                <p className="text">
                  BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                </p>
              </div>
            </div>
            <button className="bottom_btn">BATAFSIL</button>
          </div>
          <div className="new-card">
            <div className="top">
              <div className="left">
                <img src="https://picsum.photos/248/128" alt="rams" />
              </div>
              <div className="right">
                <div className="head">
                  <p className="media">MEDIA</p>
                  <p className="date">August 10, 2023</p>
                </div>
                <p className="text">
                  BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                </p>
              </div>
            </div>
            <button className="bottom_btn">BATAFSIL</button>
          </div>
          <div className="new-card">
            <div className="top">
              <div className="left">
                <img src="https://picsum.photos/248/128" alt="rams" />
              </div>
              <div className="right">
                <div className="head">
                  <p className="media">MEDIA</p>
                  <p className="date">August 10, 2023</p>
                </div>
                <p className="text">
                  BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                </p>
              </div>
            </div>
            <button className="bottom_btn">BATAFSIL</button>
          </div>
        </div>
      </section>
      <section className="section-five">
        <div className="top">
          <div className="left">
            <h2>So'nggi maqolalar va kitoblar</h2>
            <p>Eng zor fotosuratlar</p>
          </div>
          <div className="right">
            <button>Barcha maqolalar va kitoblar</button>
          </div>
        </div>
        <div className="gallery_wrapper">
          <div className="gallery_card">
            <div className="left">
              <img src="https://picsum.photos/id/41/240/148"/>
            </div>
            <div className="right">
              <div className="texts">
                <h3 className="heading">
                  RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                </h3>
                <h3 className="desc">
                  Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                  madaniy merosni muhofaza qilish toʼgʼrisida"gi YUNESKO
                  konventsiyasiga muvofiq,
                </h3>
              </div>
              <div className="more_btn">
                <CgArrowTopRight />
              </div>
            </div>
          </div>
          <div className="gallery_card">
            <div className="left">
              <img src="https://picsum.photos/id/41/240/148" />
            </div>
            <div className="right">
              <div className="texts">
                <h3 className="heading">
                  RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                </h3>
                <h3 className="desc">
                  Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                  madaniy merosni muhofaza qilish toʼgʼrisida"gi YuNESKO
                  konventsiyasiga muvofiq,
                </h3>
              </div>
              <div className="more_btn">
                <CgArrowTopRight />
              </div>
            </div>
          </div>
          <div className="gallery_card">
            <div className="left">
              <img src="https://picsum.photos/id/41/240/148" />
            </div>
            <div className="right">
              <div className="texts">
                <h3 className="heading">
                  RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                </h3>
                <h3 className="desc">
                  Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                  madaniy merosni muhofaza qilish toʼgʼrisida"gi YuNESKO
                  konventsiyasiga muvofiq,
                </h3>
              </div>
              <div className="more_btn">
                <CgArrowTopRight />
              </div>
            </div>
          </div>
          <div className="gallery_card">
            <div className="left">
              <img src="https://picsum.photos/id/41/240/148" />
            </div>
            <div className="right">
              <div className="texts">
                <h3 className="heading">
                  RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                </h3>
                <h3 className="desc">
                  Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                  madaniy merosni muhofaza qilish toʼgʼrisida"gi YuNESKO
                  konventsiyasiga muvofiq,
                </h3>
              </div>
              <div className="more_btn">
                <CgArrowTopRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-six">
        <div className="left">
          <div className="texts">
            <h3>AUDOMATERIALLAR</h3>
            <p>ENG ZOR FOTOSURATLAR</p>
          </div>
          <button>BARCHA AUDOMATERIALLAR</button>
        </div>
        <div className="right">
          <div className="category">
            <AiOutlineYoutube />
            <p>QARSAK</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>BAXSHICHILIK SAN'ATI</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>XALFACHILIK</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>QARSAK</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>QARSAK</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>BAXSHICHILIK SAN'ATI</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>XALFACHILIK</p>
          </div>
          <div className="category">
            <AiOutlineYoutube />
            <p>QARSAK</p>
          </div>
        </div>
      </section>

      <section className="section-seven">
        <div className="top">
          <div className="left">
            <h3>FOTOSURATLAR</h3>
            <p>ENG ZOR FOTOSURATLAR</p>
          </div>
          <div className="right">
            <button>BARCHA FOTOSURATLAR</button>
          </div>
        </div>

        <div className="images_wrp">
          <img src={FirstGallery} />
          <img src={SecondGallery} />
          <img src={ThirdGallery} />
        </div>

        <div className="subscribe_section">
          <div className="top">
            <div className="left">
              <h5>
                RESPUBLIKA MILLIY AKSIYA VA QIZIQCHILIK SAN'AT MARKAZI
                YANGILIKLARIGA OBUNA BO'LING
              </h5>
              <form>
                <input placeholder="NASIROVJAMA@GMAIL.COM" />
                <button>OBUNA BO'LISH</button>
              </form>
            </div>
            <div className="right">
              <h5>SHUNINGDEK, BIZNI TARMOQLARDA KUZATIB BORING</h5>
              <div className="links">
              <FaInstagram/> 
              <FaFacebook/> 
              <FaTwitter/>
              <FaTelegram/>
              <FaYoutube/>
               
              </div>
            </div>
          </div>
          <p className="desc_bottom">
            milliy askiya va qiziqchilik san’ati markazi yangiliklariga obuna
            bo'ling va elektron pochtangizga bir oz tarix qo'shing. Spam va
            yolg'on ma'lumotlar yo'q. Faqat milliy askiya va qiziqchilik san’ati
            markazi yangiliklari!
          </p>
        </div>
      </section>

      <section className="section-eight">
        <div className="top">
          <div className="left">
            <h3>VIDEO GALEREYA</h3>
            <p className="last_vds">ENG OXIRGI VIDEOLAR</p>
          </div>
          <div className="right">
            <button>BARCHA VIDEOLAR</button>
          </div>
        </div>
        <div className="vds_wrp">


          <div className="vd">
            <img src="https://picsum.photos/id/315/240/260" />
            <div className="body">
              <div className="top">
                <p className="media">MEDIA</p>
                <p className="date">August 10, 2023</p>
              </div>
              <h3 className="title_txt">
                BEST BASKETBALL NEWS <br /> IN OUR WEEKLY SPORTS <br /> DIGEST
              </h3>
              <ul className="details">
                <li>
                  <FaCalendar />
                  20 июля 2023
                </li>
                <li>
                  <FaGlobe />
                  Ташкент
                </li>
                <li>
                  <FaEye />
                  3325
                </li>
              </ul>
              <button className="watch_btn">
                <FaPlay />
                <p>KO'RISH</p>
              </button>
            </div>
          </div>
          <div className="vd">
            <img src="https://picsum.photos/id/315/240/260" />
            <div className="body">
              <div className="top">
                <p className="media">MEDIA</p>
                <p className="date">August 10, 2023</p>
              </div>
              <h3 className="title_txt">
                BEST BASKETBALL NEWS <br /> IN OUR WEEKLY SPORTS <br /> DIGEST
              </h3>
              <ul className="details">
                <li>
                  <FaCalendar />
                  20 июля 2023
                </li>
                <li>
                  <FaGlobe />
                  Ташкент
                </li>
                <li>
                  <FaEye />
                  3325
                </li>
              </ul>
              <button className="watch_btn">
                <FaPlay />
                <p>KO'RISH</p>
              </button>
            </div>
          </div>
          <div className="vd">
            <img src="https://picsum.photos/id/315/240/260" />
            <div className="body">
              <div className="top">
                <p className="media">MEDIA</p>
                <p className="date">August 10, 2023</p>
              </div>
              <h3 className="title_txt">
                BEST BASKETBALL NEWS <br /> IN OUR WEEKLY SPORTS <br /> DIGEST
              </h3>
              <ul className="details">
                <li>
                  <FaCalendar />
                  20 июля 2023
                </li>
                <li>
                  <FaGlobe />
                  Ташкент
                </li>
                <li>
                  <FaEye />
                  3325
                </li>
              </ul>
              <button className="watch_btn">
                <FaPlay />
                <p>KO'RISH</p>
              </button>
            </div>
          </div>
          <div className="vd">
            <img src="https://picsum.photos/id/315/240/260" />
            <div className="body">
              <div className="top">
                <p className="media">MEDIA</p>
                <p className="date">August 10, 2023</p>
              </div>
              <h3 className="title_txt">
                BEST BASKETBALL NEWS <br /> IN OUR WEEKLY SPORTS <br /> DIGEST
              </h3>
              <ul className="details">
                <li>
                  <FaCalendar />
                  20 июля 2023
                </li>
                <li>
                  <FaGlobe />
                  Ташкент
                </li>
                <li>
                  <FaEye />
                  3325
                </li>
              </ul>
              <button className="watch_btn">
                <FaPlay />
                <p>KO'RISH</p>
              </button>
            </div>
          </div>
          <div className="vd">
            <img src="https://picsum.photos/id/315/240/260" />
            <div className="body">
              <div className="top">
                <p className="media">MEDIA</p>
                <p className="date">August 10, 2023</p>
              </div>
              <h3 className="title_txt">
                BEST BASKETBALL NEWS <br /> IN OUR WEEKLY SPORTS <br /> DIGEST
              </h3>
              <ul className="details">
                <li>
                  <FaCalendar />
                  20 июля 2023
                </li>
                <li>
                  <FaGlobe />
                  Ташкент
                </li>
                <li>
                  <FaEye />
                  3325
                </li>
              </ul>
              <button className="watch_btn">
                <FaPlay />
                <p>KO'RISH</p>
              </button>
            </div>
          </div>
        

        </div>
      </section>


    
    <section className="section-nine">
      <div className="partners">
      <img src={FirstPartner}/>
      <img src={SecondPartner}/>
      <img src={ThirdPartner}/>
      <img src={FirstPartner}/>
      <img src={SecondPartner}/>
      <img src={ThirdPartner}/>
      </div>
    </section>


    </div>
  );
};

export default Home;
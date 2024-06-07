import React from 'react';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import '../styles/MoreAbout.css';
import NavBar from '../components/NavBar';

const MoreAbout = () => {
    return (
        <div className='more-about-wrap'>
            <NavBar />
            <div className='body'>
                <section className='about-me'>
                    <h2>關於我</h2>
                    <p>您好，我叫黎方東，今年22歲，畢業於元智大學資工系，目前就讀於台大碩一。我有認真負責的個性，勇於接受挑戰並擁有積極樂觀的態度，喜歡與人溝通，容易適應於新的環境。</p>
                </section>

                <hr />

                <section className='education'>
                    <h2>學歷</h2>
                    <div className='education-item'>
                        <h3>國立台灣大學</h3>
                        <p>華語教學碩士學位學程碩士日間就讀中</p>
                        <p className='study-time'>2022/9 ~ 2024/9</p>
                    </div>
                    <div className='education-item'>
                        <h3>元智大學</h3>
                        <p className='major'>資訊英專班大學日間就讀中</p>
                        <p className='study-time'>2018/9 ~ 2022/6</p>
                    </div>
                </section>

                <hr />

                <section className='work-experience'>
                    <h2>工作經驗</h2>
                    <div className='work-item'>
                        <div className='job-header'>
                            <h3>資安處產品部</h3>
                            <p className='work-time'>08/2023 - 01/2024</p>
                        </div>
                        <h4 className='company'>台灣大哥大</h4>
                        <p className='location'>實習生 | 台北市大安區</p>
                        <p className='job-description'>
                            - 負責與業務聯繫、解決客戶的問題、維持公司營運流暢
                            <br />
                            - 製作報表、翻譯簡報及相關文件
                        </p>
                    </div>
                    <div className='work-item'>
                        <div className='job-header'>
                            <h3>臺灣優華語計畫</h3>
                            <p className='work-time'>09/2022 - 12/2022</p>
                        </div>
                        <h4 className='company'>國立臺灣大學</h4>
                        <p className='location'>助教 | 台北市大安區</p>
                        <p className='job-description'> 哈佛&臺大2022秋季學期1對1線上教學
                            <br></br>
                            負責協助哈佛大學的學生，進行一對一華語會話課程。透過線上平台進行視訊教學，並提供個人化教學建議和學習指導。
                        </p>
                    </div>
                    <div className='work-item'>
                        <div className='job-header'>
                            <h3>辦公室助理</h3>
                            <p className='work-time'>09/2021 - 06/2022</p>
                        </div>
                        <h4 className='company'>元智大學宿舍服務組</h4>
                        <p className='location'>工讀生 | 桃園市中壢區</p>
                        <p className='job-description'>
                            文書處理。負責中英翻譯及協助處理外籍生住宿問題。
                        </p>
                    </div>
                    <div className='work-item'>
                        <div className='job-header'>
                            <h3>元智大學學餐服務生</h3>
                            <p className='work-time'>02/2020 - 06/2021</p>
                        </div>
                        <h4 className='company'>元智大學</h4>
                        <p className='location'>工讀生 | 桃園市中壢區</p>
                        <p className='job-description'>
                            保持店內清潔、打烊收洗餐具。
                        </p>
                    </div>
                </section>

                <hr />

                <section className='language-skills'>
                    <h2>語言能力</h2>
                    <div className='language'>
                        <h3><u>中文</u></h3>
                        <h4 className='skills'>聽 / 精通 說 / 精通 讀 / 精通 寫 / 精通</h4>
                        <p className='test'>華語文能力測驗 - 聽讀流利精通級 C1</p>
                    </div>
                    <div className='language'>
                        <h3><u>英文</u></h3>
                        <h4 className='skills'>聽 / 精通 說 / 精通 讀 / 精通 寫 / 精通</h4>
                        <p className='test'>TOEIC (多益測驗) 825</p>
                    </div>
                    <div className='language'>
                        <h3><u>越南文</u></h3>
                        <h4 className='skills'>聽 / 精通 說 / 精通 讀 / 精通 寫 / 精通</h4>
                        <p className='test'>母語</p>
                    </div>
                </section>

                <hr />

                <section className='skills'>
                    <h2>專長</h2>
                    <div className='skills-item'>
                        <h4>程式設計</h4>
                        <p>HTLML, CSS, Javascript, Python</p>
                    </div>
                    <div className='skills-item'>
                        <h4>文書處理</h4>
                        <p>Microsoft Office, Google Meet, MS Teams </p>
                    </div>
                </section>
                <div className='contact-footer'>
                    <Contact />
                    <Footer />
                </div>

            </div>
        </div>
    );
};

export default MoreAbout;

// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/sixthSection/img-main.png';
import AchievmentComponent from "../../components/achievmentComponent.tsx";
import CommentComponent from "../../components/commentComponent.tsx";

import BaniModeImage from '../../assets/img/homePage/sixthSection/footer/img-banimod.png';
import BazarBimeImage from '../../assets/img/homePage/sixthSection/footer/img-bazar-bime.png';
import ertebatFardaImage from '../../assets/img/homePage/sixthSection/footer/img-ertebat-farda.png';
import FoldaImage from '../../assets/img/homePage/sixthSection/footer/img-folad.png';
import GoldIranImage from '../../assets/img/homePage/sixthSection/footer/img-goldiran.png';
import HomsaImage from '../../assets/img/homePage/sixthSection/footer/img-homsa.png';
import IstcoolImage from '../../assets/img/homePage/sixthSection/footer/img-istcool.png';
import JeanImage from '../../assets/img/homePage/sixthSection/footer/img-jean.png';
import KomodaImage from '../../assets/img/homePage/sixthSection/footer/img-komoda.png';
import ShenotoImage from '../../assets/img/homePage/sixthSection/footer/img-shenoto.png';
import SibcheImage from '../../assets/img/homePage/sixthSection/footer/img-sibche.png';
import TapsiImage from '../../assets/img/homePage/sixthSection/footer/img-tapsi.png';
import TitleAndParagraphComponent from "../../chunks/titleAndParagraphComponent.tsx";

// Creating functional component of home page's Sixth Section and exporting it as default
export default function SixthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <div className={'bg-myGrey'}>
            <SectionComponent className={'py-[73px]'}>
                <header className={'mb-[53px]'}>
                    <TitleAndParagraphComponent title={'به خانواده ۳۰۰۰ نفری میزبان آنلاین بپیوندید'} marginBottom={0} centred>
                        پشتیبانی قوی و گسترده متخصصان میزبان آنلاین در شبانه روز ، عملکرد فوق العاده سریع
                        <br/>
                        سرویس های ارائه شده از دلایلی هستند که کاربران ما میزبان آنلاین را توصیه میکنند
                    </TitleAndParagraphComponent>
                    <div className={'flex justify-center items-center gap-[100px] mt-[38px]'}>
                        <AchievmentComponent count={'+75000'}>سرویس ارائه شده</AchievmentComponent>
                        <AchievmentComponent count={'173'}>محصول قابل ارائه</AchievmentComponent>
                        <AchievmentComponent count={'+23'}>دیتاسنتر فعال</AchievmentComponent>
                        <AchievmentComponent count={'+53000'}>مشتری خوشحال</AchievmentComponent>
                    </div>
                </header>
                <main className={'mb-[41px]'}>
                    <img className={'w-full mb-[30px] block'} src={MainImage} alt="نقشه جهان"/>
                    <div className={'flex items-center gap-[20px]'}>
                        <CommentComponent name={'رحیم حنایی'} job={'رحیم حنایی'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ...</CommentComponent>
                        <CommentComponent name={'رحیم حنایی'} job={'رحیم حنایی'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ...</CommentComponent>
                        <CommentComponent name={'رحیم حنایی'} job={'رحیم حنایی'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ...</CommentComponent>
                    </div>
                </main>
                <footer className={'grid grid-cols-6 gap-x-0 gap-y-[21px]'}>
                    <a href="#"><img className={'w-full'} src={BaniModeImage} alt="BaniModeImage"/></a>
                    <a href="#"><img className={'w-full'} src={BazarBimeImage} alt="BazarBimeImage"/></a>
                    <a href="#"><img className={'w-full'} src={ertebatFardaImage} alt="ertebatFardaImage"/></a>
                    <a href="#"><img className={'w-full'} src={FoldaImage} alt="FoldaImage"/></a>
                    <a href="#"><img className={'w-full'} src={GoldIranImage} alt="GoldIranImage"/></a>
                    <a href="#"><img className={'w-full'} src={HomsaImage} alt="HomsaImage"/></a>
                    <a href="#"><img className={'w-full'} src={IstcoolImage} alt="IstcoolImage"/></a>
                    <a href="#"><img className={'w-full'} src={JeanImage} alt="JeanImage"/></a>
                    <a href="#"><img className={'w-full'} src={KomodaImage} alt="KomodaImage"/></a>
                    <a href="#"><img className={'w-full'} src={ShenotoImage} alt="ShenotoImage"/></a>
                    <a href="#"><img className={'w-full'} src={SibcheImage} alt="SibcheImage"/></a>
                    <a href="#"><img className={'w-full'} src={TapsiImage} alt="TapsiImage"/></a>
                </footer>
            </SectionComponent>
        </div>
    );
}

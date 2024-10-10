import React from 'react';
import { useTranslation } from 'react-i18next';

// the icons 
import email_outline from "../../assets/mdi_email-outline.png";  
import phone_outline from "../../assets/phone_outline.png";
import location from "../../assets/Location on.png";
import google_icon from "../../assets/google.png"
import facebook_icon from "../../assets/logos_facebook.png";
import x_icon from "../../assets/prime_twitter.png";
import logo from "../../assets/cleanlogo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();


  return (
    <footer className="bg-white dark:bg-neutral-900">
      <div className="  border-b border-[#ababab] "   ></div>
     
      <div className="container mx-auto" dir={
        i18n.language === "en"
          ? "ltr"
          : i18n.language === "ar-EG" || i18n.language === "ar-SA"
          ? "rtl"
          : "ltr"
      }>
        <div className="flex flex-wrap justify-between mb-12  py-3">
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
          <img
              alt="logo"
              src={logo}
              // src="https://i.postimg.cc/9XZQqJDq/svgviewer-png-output-10.png"
              className="h-20 w-auto mb-7"
            />
            <p className=" font-medium leading-6  text-black dark:text-white font-roboto pr-14">
             {t("footer.paragraph")}
            </p>
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <img src={google_icon} alt="google icon" />
              </a>
              <a href="#" className="mr-4">
                <img src={facebook_icon} alt="facebook icon" />
              </a>
              <a href="#" className="mr-4">
                <img src={x_icon} alt="x icon" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <h4 className="text-lg font-medium my-7 dark:text-white">{t('footer.for_clients')}</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.about_us')}
                </a>
              </li>
              <li className="mb-2">
                <a href="/find-freelancers" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.find_freelancers')}
                </a>
              </li>
              <li className="mb-2">
                <a href="/post-job" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.post_project')}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.privacy_policy')}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.refund_policy')}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <h4 className="text-lg font-medium my-7 dark:text-white">{t('footer.for_freelancers')}</h4>
            <ul>
              <li className="mb-2">
                <a href="/find-job" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.find_work')}
                </a>
              </li>
              <li className="mb-2">
                <a href="/sign-up" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  {t('footer.create_account')}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <h4 className="text-lg font-medium my-7 dark:text-white">{t('footer.contact_us')}</h4>
            <ul>
              <li className="flex mb-2">
                <img className="pr-2" src={location} alt="location icon" />
                <p className=" text-neutral-250 dark:text-neutral-200 font-medium ">
                  {t('footer.address')}
                </p>
              </li>
              <li className="flex mb-2">
  <img className="pr-2" src={phone_outline} alt="phone icon" />
  <p className=" text-neutral-250 dark:text-neutral-200 font-medium ">
    {t('footer.phone_number')}
  </p>
</li>
<li className="flex mb-2">
  <img className="pr-2" src={email_outline} alt="email icon"  />
  <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
    {t('footer.email_address')}
  </a>
</li>
            </ul>
          </div>
        </div>
       
      </div>
      <div className=" mb-4 border-b-2 border-[#DCDCDC] " ></div>
   
        
      <div className="text-center container mx-auto mb-4">
          <p className="text-lg font-normal leading-6  text-neutral-250 dark:text-neutral-200  font-roboto">
            {t('footer.copyright')}
          </p>
       
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import { useTranslation } from 'react-i18next'

const Privacy = () => {

  const { t } = useTranslation();

  return (
    <section className='hero section center-content illustration-section-01'>
        <div class="container privacy">
        <div class="section-heading">
          <div class="upperheading">{t('your privacy matters')}</div>
          <h2>{t('Privacy Policy')}</h2>
        </div>
        <div class="block">
          <p>
           {t('This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.')}
          </p>
          <p>
          {t('We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.')}
          </p>
          <p>
           {t('The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('For the purposes of this Privacy Policy')}</h2>
          <p>
           {t('Account means a unique account created for You to access our Service or parts of our Service.')}
          </p>
          <p>
           {t('Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to BojiFY.')}
          </p>
          <p>
            {t('Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.')}
          </p>
          <p>{t('Country refers to: United States')}</p>
          <p>
            {t('Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.')}
          </p>
          <p>
            {t('Personal Data is any information that relates to an identified or identifiable individual.')}
          </p>
          <p>{t('Service refers to the Website.')}</p>
          <p>
           {t('Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.')}
          </p>
          <p>
           {t('Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).')}
          </p>
          <p>
            {t('Website refers to BojiFY, accessible from https://bojify.com')}
          </p>
          <p>
            {t('You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.')}
          </p>
        </div>
        <div class="block">
          <h2> {t('Types of Data Collected')} </h2>
          <h3> {t('Personal Data')} </h3>
          <p>
            {t('While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:')}
          </p>
          <h3> {t('Usage Data')} </h3>
          <p>
           {t('Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.')}
          </p>
          <p>
            {t('When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.')}
          </p>
          <p>
            {t('We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.')}
          </p>
          <h4>{t('Tracking Technologies and Cookies')}</h4>
          <p>
            {t('We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:')}
          </p>
          <h4>{t('Cookies or Browser Cookies')}</h4>
          <p>
            {t('A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.')}
          </p>
          <h4>{t('Flash Cookies')}</h4>
          <p>
            {t('Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read “Where can I change the settings for disabling, or deleting local shared objects?” available at https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_')}
          </p>
          <h4>{('Web Beacons')}</h4>
          <p>
           {t('Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).')}
          </p>
          <p>
            {t('Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: Cookies by PrivacyPolicies Generator.')}
          </p>
          <p>
            {t('We use both Session and Persistent Cookies for the purposes set out below:')}
          </p>
          <h4> {t('Necessary / Essential Cookies')} </h4>
          <p> {t('Type: Session Cookies')} </p>
          <p>{t('Administered by: Us')}</p>
          <p>
            {t('Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.')}
          </p>
          <h4>{t('Cookies Policy / Notice Acceptance Cookies')}</h4>
          <p>{t('Type: Persistent Cookies')}</p>
          <p>{t('Administered by: Us')}</p>
          <p>
            {t('Purpose: These Cookies identify if users have accepted the use of cookies on the Website.')}
          </p>
          <p>
            {t('For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Use of Your Personal Data')}</h2>
          <p>{t('The Company may use Personal Data for the following purposes:')}</p>
          <p>
            {t('To provide and maintain our Service, including to monitor the usage of our Service.')}
          </p>
          <p>
           {t('To manage Your requests: To attend and manage Your requests to Us.')}
          </p>
          <p>
            {t('For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Retention of Your Personal Data')}</h2>
          <p>
           {t('The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.')}
          </p>
          <p>
            {t('The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Transfer of Your Personal Data')}</h2>
          <p>
            {t('Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.')}
          </p>
          <p>
            {t('Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.')}
          </p>
          <p>
            {t('The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Disclosure of Your Personal Data')}</h2>
          <h3>{t('Business Transactions')}</h3>
          <p>
          {t('If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.')}
          </p>
          <h3>{t('Law enforcement')}</h3>
          <p>
            {t('Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).')}
          </p>
          <h3>{t('Other legal requirements')}</h3>
          <p>
            {t('The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:')}
          </p>
          <ul>
            <li>{t('Comply with a legal obligation')}</li>
            <li>{t('Protect and defend the rights or property of the Company')}</li>
            <li>
             {t('Prevent or investigate possible wrongdoing in connection with the Service')}
            </li>
            <li>
              {t('Protect the personal safety of Users of the Service or the public')}
            </li>
            <li>{t('Protect against legal liability')}</li>
          </ul>
        </div>
        <div class="block">
          <h2>{t('Security of Your Personal Data')}</h2>
          <p>
            {t('The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Children’s Privacy')}</h2>
          <p>
            {t('Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers. If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Links to Other Websites')}</h2>
          <p>
            {t('Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Changes to this Privacy Policy')}</h2>
          <p>
           {t('We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Contact Us')}</h2>
          <p>
            {t('If you have any questions about this Privacy Policy, You can contact us: By email: info@boji.finance')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Privacy
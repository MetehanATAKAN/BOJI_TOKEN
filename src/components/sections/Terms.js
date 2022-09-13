import React from 'react'
import { useTranslation } from 'react-i18next'

const Terms = () => {

  const { t } = useTranslation();

  return (
    <section className='hero section center-content illustration-section-01'>
     <div class="container terms">
        <div class="section-heading">
          <div class="upperheading">{t('Our terms')}</div>
          <h2>
            {t('Terms & Conditions')}
          </h2>
        </div>
        <div class="block">
          <h2>{t('Contact email')}</h2>
          <p>
            {
              t('These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Rhinobob LLC. (“Company”, “we”, “us”, or “our”), concerning your access to and use of the https://boji.finance website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “platform”). You agree that by accessing the platform, you have read, understood, and agreed to be bound by all of these Terms & Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.')
            }
          </p>
          <p>
            {
              t('Supplemental terms and conditions or documents that may be posted on the platform from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms & Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms & Conditions, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms & Conditions to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms & Conditions by your continued use of the platform after the date such revised Terms & Conditions are posted.')
            }
          </p>
          <p>
           {
            t('The information provided on the platform is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the platform from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.')
           }
          </p>
        </div>
        <div class="block">
          <h2>{t('Interface')}</h2>
          <p>
            {
              t('The platform provides access to a decentralized protocol on the Vite Network that allows suppliers and borrowers of digital assets to interact with the platform and transact using smart contracts (“Smart Contracts”).')
            }
          </p>
          <p>
           {
            t('Using the platform may require that you pay a fee on the Boji Token platform to perform a transaction. You acknowledge and agree that Boji Token has no control over any transactions, the method of payment of any transactions, or any actual payments of transactions. You must ensure that you have a sufficient balance to complete any transaction on the platform before initiating such transaction.')
           }
          </p>
          <p>
           {
            t('You acknowledge and agree that Boji Token has no control over any transactions over the platform, the method of payment of any transactions or any actual payments of transactions. Accordingly, you must ensure that you have a sufficient balance of the applicable cryptocurrency tokens stored at your Boji Token compatible wallet address (“Cryptocurrency Wallet”) to complete any transaction on the platform or the Boji Token platform before initiating such transaction.')
           }
          </p>
          <p>
            {
              t('When used on this platform, the terms “debt,” “lend,” “borrow,” “collateral”, “credit,” “leverage,” “bank”, “borrow”, “yield”, “invest” and other similar terms are not meant to be interpreted literally. Rather, such terms are being used to draw rough, fuzzy-logic analogies between the heavily automated and mostly deterministic operations of a decentralized-finance smart contract system and the discretionary performance of traditional-finance transactions by people. When the platform is used by users to access the platform and transact using Smart Contracts, there are no legal agreements, promises of payment, or courts of law, and therefore there are no debts, loans, or other traditional finance transactions involved.')
            }
          </p>
        </div>
        <div class="block">
          <h2>
            {t('Eligibility')}
          </h2>
          <p>
           {t('To access or use the platform, you must be able to form a legally binding contract with us. Accordingly, you represent that you have the full right, power, and authority to enter into and comply with the terms and conditions of this Agreement on behalf of yourself and any company or legal entity for which you may access or use the platform. You further represent that you are not a citizen, resident, or member of any jurisdiction or group that is subject to economic sanctions, or where your use of the platform would be illegal or otherwise violate any applicable law. You further represent that your access and use of the platform will fully comply with all applicable laws and regulations, and that you will not access or use the platform to conduct, promote, or otherwise facilitate any illegal activity.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Intellectual property rights')}</h2>
          <p>
           {t('Unless otherwise indicated, the platform is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the platform (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the platform “AS IS” for your information and personal use only. Except as expressly provided in these Terms & Conditions, no part of the platform and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.')}
          </p>
          <p>
           {
            t('Provided that you are eligible to use the platform, you are granted a limited license to access and use the platform and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the platform, the Content and the Marks.')
           }
          </p>
        </div>
        <div class="block">
          <h2>
            {t('User representations')}
          </h2>
          <p>
          {
            t('By using the platform, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms & Conditions; (2) you will not access the platform through automated or non-human means, whether through a bot, script, or otherwise; (3) you will not use the platform for any illegal or unauthorized purpose; and (4) your use of the platform will not violate any applicable law or regulation.')
          }
          </p>
          <p>
           {
            t('If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the platform (or any portion thereof).')
           }
          </p>
        </div>
        <div class="block">
          <h2>
            {
              t('Prohibited activities')
            }
          </h2>
          <p>
            {
              t('You may not access or use the platform for any purpose other than that for which we make the platform available. The platform may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.')
            }
          </p>
          <p>
            {t('As a user of the platform, you agree not to:')}
          </p>
          <ul>
            <li>
             {t('Systematically retrieve data or other content from the platform to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.')}
            </li>
            <li>
             {t('Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.')}
            </li>
            <li>
              {t('Circumvent, disable, or otherwise interfere with security-related features of the platform, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the platform and/or the Content contained therein.')}
            </li>
            <li>
            {
              t('Disparage, tarnish, or otherwise harm, in our opinion, us and/or the platform.')
            }
            </li>
            <li>
            {
              t('Use any information obtained from the platform in order to harass, abuse, or harm another person.')
            }
            </li>
            <li>
             {t('Make improper use of our support services or submit false reports of abuse or misconduct.')}
            </li>
            <li>
              {t('Use the platform in a manner inconsistent with any applicable laws or regulations.')}
            </li>
            <li>
              {t('Use the platform to advertise or offer to sell goods and services.')}
            </li>
            <li>
             {t('Engage in unauthorized framing of or linking to the platform.')}
            </li>
            <li>
              {t('Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the platform or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the platform.')}
            </li>
            <li>
              {t('Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.')}
            </li>
            <li>
              {t('Delete the copyright or other proprietary rights notice from any Content.')}
            </li>
            <li>
              {t('Attempt to impersonate another user or person or use the username of another user.')}
            </li>
            <li>{t('Sell or otherwise transfer your profile.')}</li>
            <li>
              {t('Cyberattack. Engage in any activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including (but not limited to) the deployment of viruses and denial of service attacks.')}
            </li>
            <li>
              {t('Interfere with, disrupt, or create an undue burden on the platform or the networks or services connected to the platform.')}
            </li>
            <li>
              {t('Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the platform to you.')}
            </li>
            <li>
            {t('Attempt to bypass any measures of the platform designed to prevent or restrict access to the platform, or any portion of the platform.')}
            </li>
            <li>
             {t('Copy or adapt the platform’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.')}
            </li>
            <li>
             {t('Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the platform.')}
            </li>
            <li>
              {t('Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the platform, or using or launching any unauthorized script or other software.')}
            </li>
            <li>
             {t('Use a buying agent or purchasing agent to make purchases on the platform.')}
            </li>
            <li>
             {t('Make any unauthorized use of the platform, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.')}
            </li>
            <li>
             {t('Use the platform as part of any effort to compete with us or otherwise use the platform and/or the Content for any revenue-generating endeavor or commercial enterprise.')}
            </li>
            <li>
             {t('Market Manipulation. Engage in any activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including (but not limited to) the manipulative tactics commonly known as spoofing and wash trading.')}
            </li>
          </ul>
        </div>
        <div class="block">
          <h2>{t('No advice')}</h2>
          <p>
            {t('All information provided by the platform is for informational purposes only and should not be construed as professional advice. In particular, the content and materials available on the platform does not constitute any form of advice or recommendation by us, should not be regarded as an offer, solicitation, invitation or recommendation to buy or sell investments, securities or any other financial services and is not intended to be relied upon by you in making any specific investment or other decisions. You should not take, or refrain from taking, any action based on any information contained in the platform. Before you make any financial, legal, or other decisions involving the platform, you should seek independent professional advice from an individual who is licensed and qualified in the area for which such advice would be appropriate.')}
          </p>
          <p>
            {t('Nothing included in the platform constitutes an offer or solicitation to sell, or distribution of, investments and related services to anyone in any jurisdiction.')}
          </p>
          <p>
            {t('From time to time, reference may be made to data we have gathered. These references may be selective or, may be partial. As markets change continuously, previously published information and data may not be current and should not be relied upon.')}
          </p>
          <p>
            {t('Any reference to any Rate on the platform is denominated in terms of stablecoins or other digital assets or tokens, as applicable, not USD or other fiat currency. The swap rate is a forward-looking projection based on a good faith belief of how to reasonably project results over the relevant period, but such belief is subject to numerous assumptions, risks and uncertainties (including smart contract security risks and third-party actions) which could result in a materially different (lower or higher) token-denominated rate.')}
          </p>
          <p>
            {t('The rate is not a promise, guarantee, or undertaking on the part of any person or group of persons, but depends entirely on the results of operation of smart contracts and other autonomous systems (including third-party systems) and how third parties interact with those systems after the time of your deposit.')}
          </p>
          <p>
            {t('Even if the rate is achieved as projected, you may still suffer a financial loss in fiat-denominated terms if the fiat-denominated value of the relevant tokens (your deposit and any tokens allocated or distributed to you pursuant to the rate) declines during the deposit period.')}
          </p>
        </div>
        <div class="block">
          <h2>
            {
              t('Third-party website and content')
            }
          </h2>
          <p>
          {t('The platform may contain (or you may be sent via the platform) links to other websites (“Third-Party Websites”) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (“Third-Party Content”). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the platform or any Third-Party Content posted on, available through, or installed from the platform, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the platform and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms & Conditions no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the platform or relating to any applications you use or install from the platform. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Site management')}</h2>
          <p>
            {t('We reserve the right, but not the obligation, to: (1) monitor the platform for violations of these Terms & Conditions; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms & Conditions, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the platform or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the platform in a manner designed to protect our rights and property and to facilitate the proper functioning of the platform.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Assumption of risk')}</h2>
          <p>
           {t('By accessing and using the platform, you represent that you understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of the usage and intricacies of digital assets. You further understand that the markets for these digital assets are highly volatile due to factors including (but not limited to) adoption, speculation, technology, security, and regulation. You acknowledge that the cost and speed of transacting with cryptographic and blockchain-based systems are variable and may increase dramatically at any time. You further acknowledge the risk that your digital assets may lose some or all of their value while they are supplied to the platform. If you borrow digital assets from the platform, you will have to supply digital assets of your own as collateral. If your collateral declines in value such that it is no longer sufficient to secure the amount that you borrowed, others may interact with the platform to seize your collateral in a liquidation event. You further acknowledge that we are not responsible for any of these variables or risks, do not own or control the platform, and cannot be held liable for any resulting losses that you experience while accessing or using the platform.')}
          </p>
          <p>
            {t('We make no warranties as to the markets on which digital assets are transferred, purchased, or traded. You are solely responsible for determining what, if any, taxes apply to your digital asset transactions.')}
          </p>
          <p>
            {t('We do not store, send, or receive digital assets or funds. This is because digital assets exist only by virtue of the ownership record maintained on its supporting blockchain. Any transfer of digital assets occurs within the decentralized platform and the blockchain. We cannot assist you to cancel or otherwise modify any transaction or transaction details. There are no warranties or guarantees that a transfer initiated via the platform will successfully transfer title or right in any digital asset.')}
          </p>
          <p>
            {t('Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using the platform and interacting with the platform.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Privacy policy')}</h2>
          <p>
            {t('We care about data privacy and security. Please review our Privacy Policy: https://boji.finance/privacy. By using the platform, you agree to be bound by our Privacy Policy, which is incorporated into these Terms & Conditions. Please be advised the platform is hosted in the United States. If you access the platform from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the platform, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Modifications and interruptions')}</h2>
          <p>
           {t('We reserve the right to change, modify, or remove the contents of the platform at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our platform. We also reserve the right to modify or discontinue all or part of the platform without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the platform.')}
          </p>
          <p>
           {t('We cannot guarantee the platform will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the platform, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the platform at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the platform during any downtime or discontinuance of the platform. Nothing in these Terms & Conditions will be construed to obligate us to maintain and support the platform or to supply any corrections, updates, or releases in connection therewith.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Govering law')}</h2>
          <p>
            {t('These Terms & Conditions and your use of the platform are governed by and construed in accordance with the laws of United States of America applicable to all interaction within the platform, without regard to its conflict of law principles.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Dispute resolution')}</h2>
          <p>
            {t('We will use our best efforts to resolve any potential disputes through informal, good faith negotiations. If a potential dispute arises, you must contact us by sending an email to ……. so that we can attempt to resolve it without resorting to formal dispute resolution. If we aren’t able to reach an informal resolution within sixty days of your email, then you and we both agree to resolve the potential dispute according to the process set forth below.')}
          </p>
          <p>
            {t('Any claim or controversy arising out of or relating to the Interface, this Agreement, including any question regarding this Agreement’s existence, validity or termination, or any other acts or omissions for which you may contend that we are liable, including (but not limited to) any claim or controversy as to arbitrability (“Dispute”), shall be referred to and finally resolved by arbitration in the state of Minnesota.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Restrictions')}</h2>
          <p>
            {t('The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Corrections')}</h2>
          <p>
            {t('There may be information on the platform that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the platform at any time, without prior notice.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Disclaimer')}</h2>
          <p>
            {t('HE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Limitations of liability')}</h2>
          <p>
            {t('IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $100.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Indemnification')}</h2>
          <p>
            {t('You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the platform; (2) breach of these Terms & Conditions; (3) any breach of your representations and warranties set forth in these Terms & Conditions; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the platform with whom you connected via the platform. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('User data')}</h2>
          <p>
            {t('We will maintain certain data that you transmit to the platform for the purpose of managing the performance of the platform, as well as data relating to your use of the platform. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the platform. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Electronic communications, transactions, and signature')}</h2>
          <p>
           {t('Visiting the platform, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the platform, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Miscellaneous')}</h2>
          <p>
           {t('These Terms & Conditions and any policies or operating rules posted by us on the platform or in respect to the platform constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms & Conditions shall not operate as a waiver of such right or provision. These Terms & Conditions operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms & Conditions is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms & Conditions and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms & Conditions or use of the platform. You agree that these Terms & Conditions will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms & Conditions and the lack of signing by the parties hereto to execute these Terms & Conditions.')}
          </p>
        </div>
        <div class="block">
          <h2>{t('Contact us')}</h2>
          <p>
            {t('In order to resolve a complaint regarding the platform or to receive further information regarding use of the platform, please contact us at: info@boji.finance.')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Terms
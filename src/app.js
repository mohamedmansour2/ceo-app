import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ceo from "./images/ceo.png";
import mianimg from "./images/mainimg.PNG";
import firstImg from "./images/Group 33146.png";
import secondImg from "./images/Group 33147.png";
import success from "./images/Group 33149.png";
import img1 from "./images/call.svg";
import img2 from "./images/business-and-trade (1).svg";
import img3 from "./images/XMLID_227_.svg";
import img4 from "./images/justice.svg";
import img5 from "./images/contract (2).svg";
import img6 from "./images/entrepeneur.svg";
import img7 from "./images/surface1.svg";
import { AiFillLinkedin } from "react-icons/ai";
import "./style.css";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Start Section About-us */}
        <div className="main-about">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="edit-about-img text-center">
                  <img src={ceo} alt="CEO" />
                  <div className="edit-img-info">
                    <h2> ماجد عارف </h2>
                    <span>المدير التنفيذي وشريك مؤسس</span>
                    <div className="edit-img-icon">
                      <a href="https://www.linkedin.com/in/magidarif/">
                        <AiFillLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div className="edit-about-title">
                  <p>
                    فاريانس واحدة من شركات التكنولوجيا سريعة النمو والتي تتضاعف
                    قيمتها سنويًا، فقد أنشأنا فاريانس لتكون واحدة من أكبر شركات
                    التكنولوجيا في مصر والشرق الأوسط، ولذلك تم ضخ استثمارات ذكية
                    في قطاع تكنولوجيا التعليم وتكنولوجيا التواصل عن بعد وغيرها،
                    لننشيء منظومة متكاملة لا غنى عنها للأفراد والشركات تخدم
                    المنطقة العربية بشكل خاص والعالم بشكل عام.
                  </p>
                  <p>
                    حيث أصبح الاستثمار في التكنولوجيا هو أذكى الاختيارات التي
                    يمكن القيام بها الآن وذلك بسبب التطور الهائل الذي يشهده عالم
                    التكنولوجيا بشكل سريع للغاية، وهناك العديد من المجالات في
                    التكنولوجيا الجديدة يمكن الاستثمار فيها والاستفادة منها مثل
                    تكنولوجيا التعليم والذكاء الاصطناعي والهواتف الذكية
                    والبلوكتشين والبرمجيات كخدمة وإنترنت الأشياء وخدمات البث
                    وغير ذلك الكثير. وقد تضاعف الاستثمار في شركات التكنولوجيا
                    الناشئة بالعالم إلى 675 مليار دولار، العام الماضي، ليكون
                    الاستثمار في التكنولوجيا، هو المستقبل. وقد تطور حجم
                    الاستثمارات فى شركات التكنولوجيا الناشئة فى مصر من 190 مليون
                    دولار في عام 2020، إلى 491 مليون دولار خلال عام 2021.
                    وتستهدف مصر نمو حجم الاستثمارات في قطاع التكنولوجيا لأكثر من
                    2 مليار دولار بحلول 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section About-us */}

        {/* Start Section header */}
        <div className="main-header">
          <div className="edit-header-title">
            <div className="container text-center">
              <div className="edit-header-title">
                <p>
                  أنت شريك معنا، لست مجرد مستثمر، حيث يتم متابعة المستثمرين بشكل
                  دوري من خلال قنوات اتصال مختلفة وبتقارير مفصلة تجعلك كمستثمر
                  تعيش معنا كل تطورات المشروع أولًا بأول، ولذلك جذب المشروع ثقة
                  أكثر من 200 مستثمر اختاروا فاريانس لتكون شريكهم الاستثماري
                  الأول
                </p>
                <p>
                  لماذا يطلب يطلب المستثمرون الاستثمار بحصص في فاريانس؟ متابعة
                  فاريانس مع الشركاء والمستثمرين بشكل منتظم من خلال قنوات
                  الاتصال المختلفة بتقارير مفصلة تجعلهم مشاركين في جميع مراحل
                  تطوير المشروع. وهذا هو السبب في أن فاريانس هو خيارهم الأول
                  للاستثمار الناجح.
                </p>
                <p>
                  عوائد عالية: يضمن الاستثمار في فاريانس إمكانية تحقيق عوائد
                  طويلة الأجل مع مستقبل واعد. فريق عمل محترف: تمتلك الشركة فريق
                  عمل على درجة عالية من المهارة مع أداء متميز لتحقيق أهداف
                  الشركة بسرعة وكفاءة من خلال الالتزام بالهدف الأساسي لشركة
                  فاريانس. لوحة خاصة للمستثمر: لوحة خاصة بكل مستثمر يمكنه متابعة
                  أرباحه وزيادة قيمة السهم ورأس ماله ويمكنه من خلالها القيام
                  بعملية البيع والشراء ومعرفة مواعيد اجتماعات الجمعية العمومية.
                  تهدف إلى إبقاء المستثمرين والمساهمين على اطلاع دائم بأداء
                  الشركة.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Section header */}

        {/* Start Section Plan */}
        <div className="main-plan mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="edit-img-plan">
                  <img src={mianimg} alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="edit-plan-title">
                  <p>
                    تم تسجيل أكثر من 100 ألف مستخدم حتى الآن وتم الاشتراك بأكثر
                    من 30 ألف كورس على منصة VOL، وإنشاء حوالي 5 آلاف اجتماع
                    ومحاضرة
                  </p>
                  <p style={{ color: "#FD8B25", fontWeight: "bold" }}>
                    وسيتم إطلاق 3 مشروعات جديدة خلال هذا العام، وهي
                  </p>
                  <p>
                    VLC. وسيتم إطلاق 3 مشروعات جديدة خلال هذا العام، وهي منصة
                    فاريانس للتوظيف Vjobs أكاديمية فاريانس للتدريب الذكي VAST
                    منصة فاريانس للمدارس VSS
                  </p>
                  <p style={{ color: "#FD8B25", fontWeight: "bold" }}>
                    VLC. وسيتم إطلاق 3 مشروعات جديدة خلال هذا العام، وهي منصة
                    فاريانس للتوظيف Vjobs أكاديمية فاريانس للتدريب الذكي VAST
                    منصة فاريانس للمدارس VSS
                  </p>
                </div>
              </div>

              <div className="col-md-7 edit-first-section">
                <div className="edit-plan-title">
                  <p>
                    أول منصة في الوطن العربي للفيديو كونفرنس وتكنولوجيا التواصل
                    عن بعد عبر شبكة الانترنت، وقد تم الاستثمار بشدة في تطويرها
                    خلال سنتين وتم إطلاقها سنة 2021، وتهدف لمُحاكاة تجربة تواصل
                    واقعية سواء كانت لاجتماعات العمل أو للأغراض التعليمية، وتُعد
                    منصة وتطبيق ZOOM المُنافس الأكبر لمنصة VLC في هذا السوق
                    العالمي الذي يتجاوز حجمه الـ 15 مليار دولار ومن المتوقع أن
                    يصل حجمه إلى 75 مليار دولار خلال ٥ سنوات. Android, iPhone,
                    Windows, Linux, Mac تطبيقات متاحة الآن على كما أن لها
                    extensions للمتصفحات مثل safari, edge, Chrome• رؤية منصة VLC
                    أن تصبح leader market في الشرق الأوسط، وذلك قبل سنة ٢٠٢٥
                    أداة VLC تربط بين جميع مشروعات وعناصر منظومة فاريانس بشكل
                    عام.
                  </p>
                </div>
              </div>
              <div className="col-md-5 edit-first-section">
                <div className="edit-img-plan">
                  <img src={firstImg} alt="" />
                </div>
              </div>

              <div className="col-md-7 edit-first-section">
                <div className="edit-plan-title">
                  <p>
                    أول منصة في الوطن العربي للفيديو كونفرنس وتكنولوجيا التواصل
                    عن بعد عبر شبكة الانترنت، وقد تم الاستثمار بشدة في تطويرها
                    خلال سنتين وتم إطلاقها سنة 2021، وتهدف لمُحاكاة تجربة تواصل
                    واقعية سواء كانت لاجتماعات العمل أو للأغراض التعليمية، وتُعد
                    منصة وتطبيق ZOOM المُنافس الأكبر لمنصة VLC في هذا السوق
                  </p>
                  <p>
                    حجمه إلى 75 مليار دولار خلال ٥ سنوات. Android, iPhone,
                    Windows, Linux, Mac تطبيقات متاحة الآن على كما أن لها
                    extensions للمتصفحات مثل safari, edge, Chrome رؤية منصة VLC
                    أن تصبح leader market في الشرق الأوسط، وذلك قبل سنة ٢٠٢٥
                    أداة VLC تربط بين جميع مشروعات وعناصر منظومة فاريانس بشكل
                    عام.
                  </p>
                </div>
              </div>
              <div className="col-md-5 edit-first-section">
                <div className="edit-img-plan">
                  <img src={secondImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Plan */}

        {/* Start Success Section */}
        <div className="main-success mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="edit-success-title">
                  <p style={{ paddingBottom: "5%" }}>
                    - قامت جامعة الدلتا باستخدام منصة VLC خلال السنة الدراسية
                    2020-2021 وإنشاء أكثر من 2800 محاضرة أونلاين لجميع طلابها
                    البالغ عددهم 12 ألف طالب، ووصل عدد الطلاب في بعض المحاضرات
                  </p>
                  <p style={{ paddingBottom: "5%" }}>
                    منصة VOL، وقام المُتعلمين المُسجلين بقواعد بياناتنا من
                    الحصول على أكثر من 50 ألف كورس، وتم تحقيق إيرادات من
                    الكورسات التعليمية وصلت إلى 5 مليون جنيه، ومن المتوقع أن تصل
                    حجم المبيعات للكورس الواحد إلى ١٠٠ الف دولار سنويًا. -
                    فاريانس في طريقها للاستحواذ على 10% من سوق الفيديو كونفرنس
                  </p>
                  <p style={{ paddingBottom: "5%" }}>
                    إلى 600 طالب. - تم إنتاج أكثر من 100 كورس تعليمي مسجل على
                    والاجتماعات الأونلاين والفصول الافتراضية في الشرق الأوسط
                    خلال 3 سنوات، وهذا السوق يُقدر حاليًا بحوالي 450 مليون
                    دولار. - حرص الشركة علي تعيين أفضل الكوادر والخبراء للمحافظة
                  </p>
                  <p style={{ paddingBottom: "5%" }}>
                    على رؤية الشركة المستقبلية واستمرار نجاحها ودفعها للأمام. -
                    سرعة دورة رأس مال المشروع بسبب سرعة التطور التكنولوجي والخطط
                    السويقية وسرعة زيادة المستخدمين في جميع أنحاء الوطن العربي
                    مما يحقق أرباح عالية
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="edit-success-img">
                  <img src={success} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Success Section */}

        {/* Start Section Contact */}
        <div className="main-contact mt-5">
          <div className="container" style={{ direction: "rtl" }}>
            <div className="row">
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img1} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    1-
                  </span>
                  <span>
                    يتم التواصل من قبل مسئول الاستثمار لتحديد موعد لشرح المشروع{" "}
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img2} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    2-
                  </span>
                  <span>الحضور إلى مقر الشركة </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img3} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    3-
                  </span>
                  <span>
                    مقابلة مسئول الاستثمار لعرض و شرح جوانب المشروع الفنية و آخر
                    الخطوات التنفيذية التي تمت بالمشروع
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img4} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    4-
                  </span>
                  <span>
                    مقابلة المستشار القانوني لعرض المسائل القانونية لإجراءات
                    التسجيل
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img5} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    5-
                  </span>
                  <span>
                    شرح و تعريف بالعقود التي سيتم توقيعها مع المساهم و حقوق
                    المساهم المترتبة عليها وتوقيع العقود مع رئيس مجلس الادارة
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img6} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    6-
                  </span>
                  <span>
                    بعد توقيع العقود يتم من خلال شركة فاريانس تكليف شركة تداول
                    الأوراق المالية بنقل ملكية الأسهم للمساهم
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edit-mian-contant">
                  <span>
                    <img src={img7} alt="" />
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FD8B25",
                      padding: "10px",
                    }}
                  >
                    7-
                  </span>
                  <span>
                    ﻳﺘﻢ إصدار ﻛﺸﻒ حساب ﻣﻦ ﺷﺮﻛﺔ تداول الأوراق ﺍﻟﻤﺎﻟﻴﺔ ﻳﻮﺿﺢ صدور
                    ﺍﻟﺮﻗﻢ الكودي ﺍﻟﻤﻮﺣﺪ ﻟﻠﻤﺴﺎﻫﻢ وتسجيل اﻷسهم ﺑﺎﺳﻢ المساهم ﻓﻲ
                    ﺷﺮﻛﺔ ﻣﺼﺮ ﻟﻠﻤﻘﺎﺻﺔ والبنك اﻷهلي ﺍﻟﻤﺘﺤﺪ.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Contact */}
      </>
    );
  }
}

export default App;

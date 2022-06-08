import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ceo from "./images/ceo.png";
import { AiFillLinkedin } from "react-icons/ai";
import "./style.css";
class App extends Component {
  state = {};
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;

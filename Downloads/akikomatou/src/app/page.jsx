"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 画像セクションの参照を作成
  const imageRefs = useRef([]);

  useEffect(() => {
    // Intersection Observerの設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 } // 20%見えた時点でアニメーション開始
    );

    // 各画像要素を監視
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-mincho">
      <header className="relative h-screen flex flex-col items-center justify-center">
        <img
          src="/top.jpg"
          alt="matou.top"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white">
          <img 
            src="matoushiro.png"
            alt="matou logo"
            className="mb-8 h-40 md:h-56 drop-shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="space-x-8 text-base md:text-xl tracking-wider">
            <a href="#concept" className="hover:text-[#928e84]">
              Concept
            </a>
            <a href="#staff" className="hover:text-[#928e84]">
              Staff
            </a>
            <a href="#contact" className="hover:text-[#928e84]">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="concept" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-center mb-16 tracking-widest">
            Concept
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="conseput.jpg"
              alt="Ikebana flower arrangement"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2 font-zen">
              <p className="text-sm md:text-lg leading-relaxed tracking-wider">
          
            髪を纏う<br />
            香りを纏う<br />
            静けさを纏う<br /><br />
            漢字では「間煐＝（まとう）」と書きます<br />
            "間"＝余白や静けさ"煐"＝ひかりの気配<br /><br />
            matou.は髪を整えることで、<br />
            ふっと呼吸が深くなるような時間を届ける<br /><br />
            "わたし"が巡る場所
      
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 画像セクションの修正 */}
      <section className="py-8 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div 
            ref={el => imageRefs.current[0] = el} 
            className="image-container absolute left-0 top-0 w-[40%] md:w-[35%]"
          >
            <img
              src="hori1new.jpg"
              alt="店内の様子1"
              className="w-full aspect-[3/4] object-cover shadow-lg"
            />
          </div>
          <div 
            ref={el => imageRefs.current[1] = el}
            className="image-container absolute right-0 top-[20%] md:top-[15%] w-[55%] md:w-[50%]"
          >
            <img
              src="hori2.jpeg"
              alt="店内の様子2"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </div>
          <div 
            ref={el => imageRefs.current[2] = el}
            className="image-container absolute left-[5%] md:left-[8%] top-[45%] md:top-[50%] w-[40%] md:w-[35%]"
          >
            <img
              src="hori3.jpeg"
              alt="店内の様子3"
              className="w-full aspect-[3/4] object-cover shadow-lg"
            />
          </div>
          {/* セクションの高さを確保するための透明な要素 */}
          <div className="w-full pb-[130%] md:pb-[140%]"></div>
        </div>
      </section>

      <section id="staff" className="py-20 px-4 bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-center mb-16 tracking-widest">
            Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { src: "/st1.JPG", name: "石垣 加奈", role: "スタイリスト", comment: "シンプルに、でもどこか特別なこだわりを、、" },
              { src: "/st2.JPG", name: "天野 恵", role: "スタイリスト", comment: "日常に溶け込むお洒落hair" },
              { src: "/st3.JPG", name: "浦口 夏樹", role: "スタイリスト", comment: "ライフスタイルに合わせた\nカワイイをご提案" },
              { src: "/akiko.JPG", name: "堀 綾希子", role: "代表/スタイリスト", comment: "個性を引き出す！\n大人女性ショート×ハイライト" },
            ].map((staff, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md h-full">
                <img src={staff.src} alt={staff.name} className="w-32 h-32 object-cover rounded-full mb-4" />
                <div className="font-bold text-base md:text-xl mb-1">{staff.name}</div>
                <div className="text-[#9B6B43] text-sm md:text-base mb-2">{staff.role}</div>
                <p className="text-center text-gray-600 text-sm md:text-base whitespace-pre-line mb-4 flex-grow">{staff.comment}</p>
                {staff.name === "天野 恵" && (
                  <div className="w-full mt-2 border-t border-[[#928e84] pt-4">
                    <div className="text-[#928e84] font-bold text-sm mb-1">【天野限定】</div>
                    <div className="text-[#4a4a4a] text-sm mb-2">髪と心を整える☆カラー+頭浸浴+20分ヘッドスパTR</div>
                    <div className="text-[#928e84] font-bold text-lg mb-2">¥15,900</div>
                    
                    <a 
                      href="https://beauty.hotpepper.jp/slnH000759489/coupon/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#928e84] hover:bg-[#7a8670] text-white text-sm py-2 px-4 rounded-md transition-colors duration-200 text-center"
                    >
                      他のクーポンも見てみる
                    </a>
                  </div>
                )}
                {staff.name === "堀 綾希子" && (
                  <div className="w-full mt-2 border-t border-[[#928e84] pt-4">
                    <div className="text-[#928e84] font-bold text-sm mb-1">【堀限定】</div>
                    <div className="text-[#4a4a4a] text-sm mb-2">艶を纏う＊カット＋カラー＋うるおい補修トリートメント</div>
                    <div className="text-[#928e84] font-bold text-lg mb-2">¥16,900</div>
                    <a 
                      href="https://beauty.hotpepper.jp/slnH000759489/coupon/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#928e84] hover:bg-[#7a8670] text-white text-sm py-2 px-4 rounded-md transition-colors duration-200 text-center"
                    >
                      他のクーポンも見てみる
                    </a>
                  </div>
                )}
                {staff.name === "石垣 加奈" && (
                  <div className="w-full mt-2 border-t border-[[#928e84] pt-4">
                    <div className="text-[#928e84] font-bold text-sm mb-1">【石垣限定】</div>
                    <div className="text-[#4a4a4a] text-sm mb-2">季節の髪に寄りそう* カット＋カラー＋トリートメント</div>
                    <div className="text-[#928e84] font-bold text-lg mb-2">¥15,500</div>
                    
                    <a 
                      href="https://beauty.hotpepper.jp/slnH000759489/coupon/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#928e84] hover:bg-[#7a8670] text-white text-sm py-2 px-4 rounded-md transition-colors duration-200 text-center"
                    >
                      他のクーポンも見てみる
                    </a>
                  </div>
                )}
                {staff.name === "浦口 夏樹" && (
                  <div className="w-full mt-2 border-t border-[[#928e84] pt-4">
                    <div className="text-[#928e84] font-bold text-sm mb-1">【浦口限定】</div>
                    <div className="text-[#4a4a4a] text-sm mb-2">髪がやわらぐケア-カット＋カラー＋トリートメント</div>
                    <div className="text-[#928e84] font-bold text-lg mb-2">¥18,000</div>
                    
                    <a 
                      href="https://beauty.hotpepper.jp/slnH000759489/coupon/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#928e84] hover:bg-[#7a8670] text-white text-sm py-2 px-4 rounded-md transition-colors duration-200 text-center"
                    >
                      他のクーポンも見てみる
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-xl mx-auto font-zen">
          <div className="mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-7 h-7 mr-2 text-[#928e84] fill-current"
              aria-hidden="true"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
            </svg>
            <span className="text-xl font-bold">matou.</span>
          </div>
          <div className="mb-6 text-sm md:text-base tracking-wide">
            三重県桑名市西別所８９５番３
          </div>
          <div className="mb-6 text-sm md:text-base tracking-wide">
            アクセス・道案内：蓮花寺駅から東にファミリーマートの角を左に曲がり、63号線を稗田の交差点を右に曲がるとすぐセブンイレブンがあります。その向かいが当店です。
          </div>
          <div className="mb-2 text-base tracking-wide">
            営業時間：9:00-19:00（各スタイリストの出勤時間をご確認ください）
          </div>
          <div className="mb-2 text-base tracking-wide">
            定休日：不定休
          </div>
          <div className="w-full mt-8">
            <div className="relative w-full h-0 pb-[75%] md:pb-[56.25%]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.37825339324!2d136.65617960000003!3d35.057919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600390641d0fc513%3A0x8da3e8b3081fb9be!2z44CSNTExLTA4NTEg5LiJ6YeN55yM5qGR5ZCN5biC6KW_5Yil5omA77yY77yZ77yV4oiS77yT!5e1!3m2!1sja!2sjp!4v1754311540747!5m2!1sja!2sjp" 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      

      <footer className="bg-[#2C2C2C] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center tracking-wider">
          <div className="text-2xl mb-4">matou.</div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-[#9B6B43]">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#9B6B43]">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#9B6B43]">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
          <p>2025 matou. All rights reserved.</p>
        </div>
      </footer>

      {/* 追従ボタン */}
      <a
        href="https://beauty.hotpepper.jp/slnH000759489/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 w-full z-50 bg-[#928e84] text-white py-4 shadow-lg text-sm md:text-lg font-bold hover:bg-[#7a8670] transition-colors duration-200 text-center rounded-none"
      >
        ご予約・空席確認はこちら
      </a>
    </div>
  );
}

export default MainComponent;
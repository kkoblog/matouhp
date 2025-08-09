"use client";
import React, { useState } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="relative h-screen flex flex-col items-center justify-center">
        <img
          src="/top.jpg"
          alt="matou.top"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        <div className="relative text-center text-white">
          <img
            src="/matou.+nuu_kanjiyoko_rectangle_1.png"
            alt="matou."
            className="h-32 md:h-48 lg:h-64 w-auto mb-8"
          />
          <div className="space-x-8 text-xl font-serif tracking-wider">
            <a href="#concept" className="hover:text-[#928e84] font-light">
              Concept
            </a>
            <a href="#staff" className="hover:text-[#928e84] font-light">
              Staff
            </a>
            <a href="#contact" className="hover:text-[#928e84] font-light">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="concept" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest text-center mb-16">
            Concept
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/floral-art.jpg"
              alt="Ikebana flower arrangement"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2 font-serif tracking-wider leading-relaxed">
              <p className="text-lg leading-relaxed">
                髪を纏う<br />
                香りを纏う<br />
                静けさを纏う<br /><br />
                漢字では「間＝（まとう）」と書きます<br />
                "間"＝余白や静けさ　"＝"＝ひかりの気配<br /><br />
                matou.は髪を整えることで、<br />
                ふっと呼吸が深くなるような時間を届ける<br /><br />
                "わたし"が巡る場所
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="staff" className="py-20 px-4 bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest text-center mb-16">
            Staff
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              { src: "/st1.JPG", name: "石垣 加奈", role: "スタイリスト", comment: "シンプルに、でもどこか特別なこだわりを、、" },
              { src: "/st2.JPG", name: "天野 恵", role: "スタイリスト", comment: "日常に溶け込むお洒落hair" },
              { src: "/akiko.JPG", name: "堀 綾希子", role: "スタイリスト", comment: "個性を引き出す！<br />大人女性ショート×ハイライト" },
            ].map((staff, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-64 h-[600px]">
                <div className="flex flex-col items-center flex-1">
                  <img src={staff.src} alt={staff.name} className="w-32 h-32 object-cover rounded-full mb-4" />
                  <div className="font-serif text-xl mb-1 tracking-wider">{staff.name}</div>
                  <div className="text-[#928e84] mb-2 font-serif tracking-wider">{staff.role}</div>
                  <p className="text-center text-gray-600 text-sm font-serif tracking-wider" dangerouslySetInnerHTML={{ __html: staff.comment }}></p>
                </div>
                <div className="w-full">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col gap-1 mb-2">
                      {staff.name === "石垣 加奈" ? (
                        <>
                          <span className="bg-[#928e84] text-white inline-block px-1.5 py-0.5 text-[10px] w-fit rounded-sm">カット</span>
                          <span className="bg-[#928e84] text-white inline-block px-1.5 py-0.5 text-[10px] w-fit rounded-sm">トリートメント</span>
                        </>
                      ) : staff.name === "天野 恵" ? (
                        <>
                          <span className="bg-[#928e84] text-white inline-block px-1.5 py-0.5 text-[10px] w-fit rounded-sm">カット</span>
                        </>
                      ) : (
                        <>
                          <span className="bg-[#928e84] text-white inline-block px-1.5 py-0.5 text-[10px] w-fit rounded-sm">カット</span>
                          <span className="bg-[#928e84] text-white inline-block px-1.5 py-0.5 text-[10px] w-fit rounded-sm">トリートメント</span>
                          <span className="bg-[#928e84] text-white inline-block px-1.5 py-0.5 text-[10px] w-fit rounded-sm">その他</span>
                        </>
                      )}
                      <span className="border border-gray-300 inline-block px-3 py-1 text-xs w-fit">{staff.name.split(' ')[0]}限定クーポン</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {staff.name === "石垣 加奈" ? (
                        <>髪にご褒美を<br />カット＋集中ケアトリートメント</>
                      ) : staff.name === "天野 恵" ? (
                        <>育てる美髪。<br />カット+COTA シャンプー・トリートメント付き</>
                      ) : (
                        <>私を整える<br />カットケアコース</>
                      )}
                    </h3>
                    <div className="text-right text-xl font-bold text-red-500 mb-2">
                      {staff.name === "石垣 加奈" ? "¥10,900" : staff.name === "天野 恵" ? "¥13,300" : "¥8,500"}
                    </div>
                  </div>
                  <a
                    href="https://beauty.hotpepper.jp/slnH000759489/coupon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full text-[#928e84] border border-[#928e84] px-4 py-2 rounded-md text-sm hover:bg-[#928e84] hover:text-white transition-colors text-center block"
                  >
                    他のクーポンも見てみる
                  </a>
                </div>
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
          <div className="mb-6 text-base tracking-wide">
            三重県桑名市西別所８９５番３
          </div>
          <div className="mb-6 text-base tracking-wide">
            アクセス・道案内：蓮花寺駅から東にファミリーマートの角を左に曲がり、63号線を稗田の交差点を右に曲がるとすぐセブンイレブンがあります。その向かいが当店です。
          </div>
          <div className="mb-2 text-base tracking-wide">
            営業時間：9:00-19:00（各スタイリストの出勤時間をご確認ください）
          </div>
          <div className="mb-2 text-base tracking-wide">
            定休日：不定休
          </div>
        </div>
      </section>

      <footer className="bg-[#2C2C2C] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center font-zen">
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
        className="fixed bottom-0 left-0 w-full z-50 bg-[#928e84] text-white py-4 shadow-lg text-lg font-bold hover:bg-[#7a8670] transition-colors duration-200 text-center rounded-none"
      >
        ご予約・空席確認はこちら
      </a>
    </div>
  );
}

export default MainComponent;
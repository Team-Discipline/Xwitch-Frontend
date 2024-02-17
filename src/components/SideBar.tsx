"use client"

import React, {useEffect, useState} from 'react'
import StreamerProfileButton from "@/components/StreamerProfileButton";

export const SideBar = ({serverSideData}: any) => {
  const [clientSideData, setClientSideData] = useState(null);
  const [sidebarWidth, setSidebarWidth] = useState(56);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [extend, setExtend] = useState(false)

  const handleExtend = () => {
    console.log("handle", extend);
    setExtend(!extend);
    setSidebarWidth(!extend ? 14 : 3);
    // // //extend == false: 사이드바 닫힌 상태 & window 크기가 1200이상일때 확장가능
    // if (!extend) {
    //   setSidebarWidth(14);
    // } else {
    //   setSidebarWidth(3);
    // }
  }
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  // 사이드바 테스트용 더미데이터
  const streamerInfo = [
    {
      streamerName: 'rlgus1006',
      profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/86edb3b8-4218-4125-827a-b93d754a00ee-profile_image-70x70.png'
    },
    {
      streamerName: 'nodolly',
      profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/267e8677-6d58-45ad-b64d-61400298d935-profile_image-70x70.png'
    },
    {
      streamerName: 'kss7749',
      profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/835fb20f-cfbb-44f4-bfe1-ba3ad23a8046-profile_image-70x70.png'
    },
    {
      streamerName: 'mawang0216',
      profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/2eb00bd6-38c8-48c7-aea6-7d20e12ca383-profile_image-70x70.png'
    },
    {
      streamerName: 'pikra10',
      profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f1927e40-6561-4af3-970d-4711df08bb52-profile_image-70x70.jpg'
    }
  ]
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('');
      const data = await res.json();
      setClientSideData(data);
    };

    setSidebarWidth(window.innerWidth >= 1200 ? (extend ? 14 : 3) : 3);

    fetchData().then(r => console.log(r));
    // 화면 크기에 따른 사이드바 크기 조정

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
}, [extend, window.innerWidth]
)

return (
  <div className={'bg-gray-200'} style={{width: `${sidebarWidth}rem`}}>
    <div className='bg-gray-200'>
      <div>
        <div
          className={`Layout-sc-1xcs6mc-0 collapse-toggle ${window.innerWidth < 1200 ? 'hidden' : extend ? 'kpdiXD2' : 'kpdiXD'}`}>
          <div className="inline-flex kBtJDm">
            <button onClick={handleExtend} className="ScCoreButton-sc-ocjdkq-0 bTXTVH ScButtonIcon-sc-9yap0r-0 eSFFfM"
                    aria-label="측면 탐색 확장"
                    data-a-target="side-nav-arrow">
              <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR" style={{width: '1.25rem', height: '1.25rem'}}>
                <div className="ScIconLayout-sc-1q25cff-0 cASLMj">
                  <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                    <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                         role="presentation" aria-hidden="true" focusable="false"
                         className="ScIconSVG-sc-1q25cff-1 jpczqG">
                      <g>
                        <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="side-bar-contents">
          <nav className="Layout-sc-1xcs6mc-0 skip-to-target" id="side-nav" aria-label="왼쪽 내비게이션" aria-hidden="false"
               tabIndex={0}>
            <div className="Layout-sc-1xcs6mc-0 jxGBqp">
              <div className="Layout-sc-1xcs6mc-0">
                <div className="Layout-sc-1xcs6mc-0">
                  <div aria-label="추천 채널" className="Layout-sc-1xcs6mc-0 dcyYPL side-nav-section" role="group">
                    <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                      <div className="Layout-sc-1xcs6mc-0 kYEeAt side-nav-header"
                           data-a-target="side-nav-header-collapsed">
                        <div className="ScFigure-sc-wkgzod-0 caxXaW tw-svg">
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                  d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z"
                                  clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="relative InjectLayout-sc-1i43xsx-0 hWukFy tw-transition-group">
                      {streamerInfo.map((info) => (
                        <StreamerProfileButton key={info.streamerName} info={info}/>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="side-info-container">
                  <div id="96711070f35141ed51f373c7a9ba808f"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);
}
;

export async function getServerSideProps() {
  const serverSideData = 'Data from Server-Side';

  return {
    props: {serverSideData},
  }
}

export default SideBar;
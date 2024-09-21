import React from 'react';

function Footer() {
  return (
    <div className='w-[1200px] h-[468px] flex flex-row mx-auto justify-between align-center'>
      <div className='flex flex-col w-[262px]'>
        <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H14.1666C12.6195 2 11.1358 2.61458 10.0419 3.70854C8.94789 4.80251 8.33331 6.28624 8.33331 7.83333C8.33331 9.38043 8.94789 10.8642 10.0419 11.9581C11.1358 13.0521 12.6195 13.6667 14.1666 13.6667M20 2V13.6667M20 2H25.8333C26.5994 2 27.3579 2.15088 28.0656 2.44404C28.7734 2.73719 29.4164 3.16687 29.9581 3.70854C30.4998 4.25022 30.9295 4.89328 31.2226 5.60101C31.5158 6.30875 31.6666 7.06729 31.6666 7.83333C31.6666 8.59938 31.5158 9.35792 31.2226 10.0657C30.9295 10.7734 30.4998 11.4164 29.9581 11.9581C29.4164 12.4998 28.7734 12.9295 28.0656 13.2226C27.3579 13.5158 26.5994 13.6667 25.8333 13.6667M20 13.6667H14.1666M20 13.6667H25.8333M20 13.6667V25.3333M14.1666 13.6667C12.6195 13.6667 11.1358 14.2812 10.0419 15.3752C8.94789 16.4692 8.33331 17.9529 8.33331 19.5C8.33331 21.0471 8.94789 22.5308 10.0419 23.6248C11.1358 24.7188 12.6195 25.3333 14.1666 25.3333M25.8333 13.6667C25.0673 13.6667 24.3087 13.8175 23.601 14.1107C22.8933 14.4039 22.2502 14.8335 21.7085 15.3752C21.1668 15.9169 20.7372 16.5599 20.444 17.2677C20.1509 17.9754 20 18.734 20 19.5C20 20.266 20.1509 21.0246 20.444 21.7323C20.7372 22.4401 21.1668 23.0831 21.7085 23.6248C22.2502 24.1665 22.8933 24.5961 23.601 24.8893C24.3087 25.1824 25.0673 25.3333 25.8333 25.3333C26.5994 25.3333 27.3579 25.1824 28.0656 24.8893C28.7734 24.5961 29.4164 24.1665 29.9581 23.6248C30.4998 23.0831 30.9295 22.4401 31.2226 21.7323C31.5158 21.0246 31.6666 20.266 31.6666 19.5C31.6666 18.734 31.5158 17.9754 31.2226 17.2677C30.9295 16.5599 30.4998 15.9169 29.9581 15.3752C29.4164 14.8335 28.7734 14.4039 28.0656 14.1107C27.3579 13.8175 26.5994 13.6667 25.8333 13.6667ZM14.1666 25.3333C12.6195 25.3333 11.1358 25.9479 10.0419 27.0419C8.94789 28.1358 8.33331 29.6196 8.33331 31.1667C8.33331 32.7138 8.94789 34.1975 10.0419 35.2915C11.1358 36.3854 12.6195 37 14.1666 37C15.7137 37 17.1975 36.3854 18.2914 35.2915C19.3854 34.1975 20 32.7138 20 31.1667V25.3333M14.1666 25.3333H20" stroke="#1E1E1E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className='flex flex-row gap-4 mt-8'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355" fill="#1E1E1E"/>
        </svg>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.98 2.163C16.184 2.163 16.564 2.175 17.83 2.233C21.082 2.381 22.601 3.924 22.749 7.152C22.807 8.417 22.818 8.797 22.818 12.001C22.818 15.206 22.806 15.585 22.749 16.85C22.6 20.075 21.085 21.621 17.83 21.769C16.564 21.827 16.186 21.839 12.98 21.839C9.77604 21.839 9.39604 21.827 8.13104 21.769C4.87104 21.62 3.36004 20.07 3.21204 16.849C3.15404 15.584 3.14204 15.205 3.14204 12C3.14204 8.796 3.15504 8.417 3.21204 7.151C3.36104 3.924 4.87604 2.38 8.13104 2.232C9.39704 2.175 9.77604 2.163 12.98 2.163ZM12.98 0C9.72104 0 9.31304 0.014 8.03304 0.072C3.67504 0.272 1.25304 2.69 1.05304 7.052C0.994042 8.333 0.980042 8.741 0.980042 12C0.980042 15.259 0.994042 15.668 1.05204 16.948C1.25204 21.306 3.67004 23.728 8.03204 23.928C9.31304 23.986 9.72104 24 12.98 24C16.239 24 16.648 23.986 17.928 23.928C22.282 23.728 24.71 21.31 24.907 16.948C24.966 15.668 24.98 15.259 24.98 12C24.98 8.741 24.966 8.333 24.908 7.053C24.712 2.699 22.291 0.273 17.929 0.073C16.648 0.014 16.239 0 12.98 0ZM12.98 5.838C9.57704 5.838 6.81804 8.597 6.81804 12C6.81804 15.403 9.57704 18.163 12.98 18.163C16.383 18.163 19.142 15.404 19.142 12C19.142 8.597 16.383 5.838 12.98 5.838ZM12.98 16C10.771 16 8.98004 14.21 8.98004 12C8.98004 9.791 10.771 8 12.98 8C15.189 8 16.98 9.791 16.98 12C16.98 14.21 15.189 16 12.98 16ZM19.386 4.155C18.59 4.155 17.945 4.8 17.945 5.595C17.945 6.39 18.59 7.035 19.386 7.035C20.181 7.035 20.825 6.39 20.825 5.595C20.825 4.8 20.181 4.155 19.386 4.155Z" fill="#1E1E1E"/>
        </svg>
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.595 0.184003C16.991 -0.0619969 8.96404 -0.0609969 5.36504 0.184003C1.46804 0.450003 1.00904 2.804 0.980042 9C1.00904 15.185 1.46404 17.549 5.36504 17.816C8.96504 18.061 16.991 18.062 20.595 17.816C24.492 17.55 24.951 15.196 24.98 9C24.951 2.815 24.496 0.451003 20.595 0.184003ZM9.98004 13V5L17.98 8.993L9.98004 13Z" fill="#1E1E1E"/>
        </svg>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.98 0H5.98004C3.21904 0 0.980042 2.239 0.980042 5V19C0.980042 21.761 3.21904 24 5.98004 24H19.98C22.742 24 24.98 21.761 24.98 19V5C24.98 2.239 22.742 0 19.98 0ZM8.98004 19H5.98004V8H8.98004V19ZM7.48004 6.732C6.51404 6.732 5.73004 5.942 5.73004 4.968C5.73004 3.994 6.51404 3.204 7.48004 3.204C8.44604 3.204 9.23004 3.994 9.23004 4.968C9.23004 5.942 8.44704 6.732 7.48004 6.732ZM20.98 19H17.98V13.396C17.98 10.028 13.98 10.283 13.98 13.396V19H10.98V8H13.98V9.765C15.376 7.179 20.98 6.988 20.98 12.241V19Z" fill="#1E1E1E"/>
        </svg>

        </div>
      </div>

      <div className='flex flex-row justify-center justify-between'>
        <div className='w-[262px]'>
          <h2 className='font-bold mb-2'>Use Cases</h2>
          <ul className='space-y-2'>
            <li>
              <a href="#uidesign" className='hover:text-gray-900'>UI design</a>
            </li>
            <li>
              <a href="#uxdesign" className='hover:text-gray-900'>UX design</a>
            </li>
            <li>
              <a href="#wireframing" className='hover:text-gray-900'>Wireframing</a>
            </li>
            <li>
              <a href="#diagramming" className='hover:text-gray-900'>Diagramming</a>
            </li>
            <li>
              <a href="#brainstroming" className='hover:text-gray-900'>Brainstorming</a>
            </li>
            <li>
              <a href="#onlinewhiteboard" className='hover:text-gray-900'>Online WhiteBoard</a>
            </li>
            <li>
              <a href="#teamcollaboration" className='hover:text-gray-900'>Team Collaboration</a>
            </li>
          </ul>
        </div>

        <div className='w-[262px]'>
          <h2 className='font-bold mb-2'>Explore</h2>
          <ul className='space-y-2'>
            <li>
              <a href="#design" className='hover:text-gray-900'>Design</a>
            </li>
            <li>
              <a href="#prototyping" className='hover:text-gray-900'>Prototyping</a>
            </li>
            <li>
              <a href="#developmentfeatures" className='hover:text-gray-900'>Development features</a>
            </li>
            <li>
              <a href="designsystems" className='hover:text-gray-900'>Design Systems</a>
            </li>
            <li>
              <a href="#collaborationfeatures" className='hover:text-gray-900'>Collaboration Features</a>
            </li>
            <li>
              <a href="#designprocess" className='hover:text-gray-900'>Design Process</a>
            </li>
            <li>
              <a href="#figjam" className='hover:text-gray-900'>FigJam</a>
            </li>
          </ul>
        </div>

        <div className='w-[262px]'>
          <h2 className='font-bold mb-2'>Resources</h2>
          <ul className='space-y-2'>
            <li>
              <a href="#blog" className='hover:text-gray-900'>Blog</a>
            </li>
            <li>
              <a href="#bestpractice" className='hover:text-gray-900'>Best Practice</a>
            </li>
            <li>
              <a href="#privacy" className='hover:text-gray-900'>Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className='hover:text-gray-900'>Terms of Service</a>
            </li>
            <li>
              <a href="#contact" className='hover:text-gray-900'>Contact Us</a>
            </li>
            <li>
              <a href="#about" className='hover:text-gray-900'>About Us</a>
            </li>
            <li>
              <a href="#faq" className='hover:text-gray-900'>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

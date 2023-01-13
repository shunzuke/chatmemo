interface LoginProps {
  type: 'dark' | 'light';
}

export default function Login(props: LoginProps) {
  const { type } = props;
  return type === 'light' ? (
    <svg
      width='237'
      height='34'
      viewBox='0 0 237 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.52 33.48C10.432 33.48 6.576 32.088 3.952 29.304C1.36 26.52 0.064003 22.76 0.064003 18.024C0.064003 14.632 0.608003 11.72 1.696 9.28799C2.816 6.82399 4.512 4.93599 6.784 3.62399C9.056 2.27999 11.952 1.60799 15.472 1.60799C17.264 1.60799 18.896 1.75199 20.368 2.03999C21.872 2.29599 23.264 2.64799 24.544 3.09599V7.656C23.264 7.144 21.888 6.75999 20.416 6.50399C18.976 6.21599 17.456 6.07199 15.856 6.07199C12.016 6.07199 9.296 7.09599 7.696 9.144C6.128 11.192 5.344 14.152 5.344 18.024C5.344 21.64 6.208 24.392 7.936 26.28C9.664 28.136 12.336 29.064 15.952 29.064C17.424 29.064 18.896 28.952 20.368 28.728C21.872 28.472 23.28 28.088 24.592 27.576V32.184C23.312 32.6 21.92 32.92 20.416 33.144C18.944 33.368 17.312 33.48 15.52 33.48Z'
        fill='#2770C6'
      />
      <path
        d='M29.6646 33V0.647995H34.8966V12.456C35.8886 11.656 37.0726 11.016 38.4486 10.536C39.8246 10.024 41.3766 9.76799 43.1046 9.76799C45.9846 9.76799 48.1126 10.456 49.4886 11.832C50.8646 13.208 51.5526 15.352 51.5526 18.264V33H46.3686V18.504C46.3686 16.744 45.9846 15.512 45.2166 14.808C44.4806 14.104 43.1846 13.752 41.3286 13.752C40.1766 13.752 39.0086 14.008 37.8246 14.52C36.6406 15 35.6646 15.64 34.8966 16.44V33H29.6646Z'
        fill='#2770C6'
      />
      <path
        d='M63.8155 33.48C62.3755 33.48 61.0315 33.224 59.7835 32.712C58.5675 32.2 57.5915 31.432 56.8555 30.408C56.1195 29.352 55.7515 28.056 55.7515 26.52C55.7515 24.344 56.4875 22.6 57.9595 21.288C59.4635 19.944 61.7675 19.272 64.8715 19.272H72.1675V18.264C72.1675 17.176 71.9915 16.312 71.6395 15.672C71.3195 15.032 70.7115 14.568 69.8155 14.28C68.9515 13.992 67.6715 13.848 65.9755 13.848C63.2875 13.848 60.7755 14.248 58.4395 15.048V11.16C59.4635 10.744 60.7115 10.408 62.1835 10.152C63.6555 9.896 65.2395 9.76799 66.9355 9.76799C70.2635 9.76799 72.7915 10.44 74.5195 11.784C76.2795 13.128 77.1595 15.32 77.1595 18.36V33H72.6955L72.3595 30.696C71.4315 31.592 70.2795 32.28 68.9035 32.76C67.5595 33.24 65.8635 33.48 63.8155 33.48ZM65.2075 29.736C66.7755 29.736 68.1355 29.48 69.2875 28.968C70.4715 28.424 71.4315 27.704 72.1675 26.808V22.824H64.9675C63.4315 22.824 62.3115 23.128 61.6075 23.736C60.9355 24.312 60.5995 25.208 60.5995 26.424C60.5995 27.608 60.9995 28.456 61.7995 28.968C62.5995 29.48 63.7355 29.736 65.2075 29.736Z'
        fill='#2770C6'
      />
      <path
        d='M91.6495 33.48C89.2175 33.48 87.3935 32.84 86.1775 31.56C84.9935 30.248 84.4015 28.472 84.4015 26.232V14.328H81.0415V10.248H84.4015V5.016L89.5855 3.43199V10.248H95.6335L95.2975 14.328H89.5855V25.944C89.5855 27.256 89.8895 28.184 90.4975 28.728C91.1055 29.24 92.0975 29.496 93.4735 29.496C94.3375 29.496 95.2495 29.336 96.2095 29.016V32.712C94.9615 33.224 93.4415 33.48 91.6495 33.48Z'
        fill='#2770C6'
      />
      <path
        d='M111.274 33V2.08799H116.65L126.442 22.104L136.186 2.08799H141.562V33H136.378V10.584L128.026 27.672H124.858L116.458 10.584V33H111.274Z'
        fill='#2770C6'
      />
      <path
        d='M159.122 33.48C155.154 33.48 152.082 32.504 149.906 30.552C147.73 28.6 146.642 25.608 146.642 21.576C146.642 17.928 147.57 15.048 149.426 12.936C151.282 10.824 154.098 9.76799 157.874 9.76799C161.33 9.76799 163.922 10.68 165.65 12.504C167.41 14.296 168.29 16.616 168.29 19.464V23.688H151.634C151.89 25.896 152.69 27.416 154.034 28.248C155.378 29.08 157.426 29.496 160.178 29.496C161.33 29.496 162.514 29.384 163.73 29.16C164.946 28.936 166.002 28.648 166.898 28.296V32.136C165.874 32.584 164.69 32.92 163.346 33.144C162.034 33.368 160.626 33.48 159.122 33.48ZM151.634 20.28H163.682V18.696C163.682 17.128 163.25 15.912 162.386 15.048C161.522 14.152 160.066 13.704 158.018 13.704C155.586 13.704 153.906 14.232 152.978 15.288C152.082 16.344 151.634 18.008 151.634 20.28Z'
        fill='#2770C6'
      />
      <path
        d='M173.383 33V10.248H178.183L178.423 12.648C179.543 11.752 180.775 11.048 182.119 10.536C183.463 10.024 184.903 9.76799 186.439 9.76799C188.071 9.76799 189.335 10.04 190.231 10.584C191.159 11.096 191.863 11.816 192.343 12.744C193.399 11.88 194.615 11.176 195.991 10.632C197.367 10.056 199.015 9.76799 200.935 9.76799C203.559 9.76799 205.495 10.44 206.743 11.784C207.991 13.128 208.615 15.192 208.615 17.976V33H203.479V18.504C203.479 16.744 203.111 15.512 202.375 14.808C201.639 14.104 200.439 13.752 198.775 13.752C197.687 13.752 196.647 13.944 195.655 14.328C194.695 14.712 193.863 15.288 193.159 16.056C193.255 16.408 193.319 16.776 193.351 17.16C193.383 17.544 193.399 17.96 193.399 18.408V33H188.551V18.552C188.551 16.888 188.263 15.672 187.687 14.904C187.111 14.136 186.023 13.752 184.423 13.752C183.303 13.752 182.231 14.024 181.207 14.568C180.215 15.08 179.319 15.704 178.519 16.44V33H173.383Z'
        fill='#2770C6'
      />
      <path
        d='M224.92 33.48C220.824 33.48 217.816 32.456 215.896 30.408C214.008 28.36 213.064 25.432 213.064 21.624C213.064 17.816 214.024 14.888 215.944 12.84C217.864 10.792 220.856 9.76799 224.92 9.76799C229.016 9.76799 232.024 10.792 233.944 12.84C235.864 14.888 236.824 17.816 236.824 21.624C236.824 25.432 235.864 28.36 233.944 30.408C232.056 32.456 229.048 33.48 224.92 33.48ZM224.92 29.064C227.32 29.064 229.016 28.488 230.008 27.336C231.032 26.152 231.544 24.248 231.544 21.624C231.544 19 231.032 17.112 230.008 15.96C229.016 14.808 227.32 14.232 224.92 14.232C222.552 14.232 220.856 14.808 219.832 15.96C218.84 17.112 218.344 19 218.344 21.624C218.344 24.248 218.84 26.152 219.832 27.336C220.856 28.488 222.552 29.064 224.92 29.064Z'
        fill='#2770C6'
      />
    </svg>
  ) : (
    <svg
      width='237'
      height='33'
      viewBox='0 0 237 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.456 32.832C10.368 32.832 6.512 31.44 3.888 28.656C1.296 25.872 0 22.112 0 17.376C0 13.984 0.544 11.072 1.632 8.64C2.752 6.176 4.448 4.288 6.72 2.976C8.992 1.632 11.888 0.959999 15.408 0.959999C17.2 0.959999 18.832 1.104 20.304 1.392C21.808 1.648 23.2 2 24.48 2.448V7.008C23.2 6.496 21.824 6.112 20.352 5.856C18.912 5.568 17.392 5.424 15.792 5.424C11.952 5.424 9.232 6.448 7.632 8.496C6.064 10.544 5.28 13.504 5.28 17.376C5.28 20.992 6.144 23.744 7.872 25.632C9.6 27.488 12.272 28.416 15.888 28.416C17.36 28.416 18.832 28.304 20.304 28.08C21.808 27.824 23.216 27.44 24.528 26.928V31.536C23.248 31.952 21.856 32.272 20.352 32.496C18.88 32.72 17.248 32.832 15.456 32.832Z'
        fill='#72B2FC'
      />
      <path
        d='M29.6006 32.352V0H34.8326V11.808C35.8246 11.008 37.0086 10.368 38.3846 9.888C39.7606 9.376 41.3126 9.12 43.0406 9.12C45.9206 9.12 48.0486 9.808 49.4246 11.184C50.8006 12.56 51.4886 14.704 51.4886 17.616V32.352H46.3046V17.856C46.3046 16.096 45.9206 14.864 45.1526 14.16C44.4166 13.456 43.1206 13.104 41.2646 13.104C40.1126 13.104 38.9446 13.36 37.7606 13.872C36.5766 14.352 35.6006 14.992 34.8326 15.792V32.352H29.6006Z'
        fill='#72B2FC'
      />
      <path
        d='M63.7515 32.832C62.3115 32.832 60.9675 32.576 59.7195 32.064C58.5035 31.552 57.5275 30.784 56.7915 29.76C56.0555 28.704 55.6875 27.408 55.6875 25.872C55.6875 23.696 56.4235 21.952 57.8955 20.64C59.3995 19.296 61.7035 18.624 64.8075 18.624H72.1035V17.616C72.1035 16.528 71.9275 15.664 71.5755 15.024C71.2555 14.384 70.6475 13.92 69.7515 13.632C68.8875 13.344 67.6075 13.2 65.9115 13.2C63.2235 13.2 60.7115 13.6 58.3755 14.4V10.512C59.3995 10.096 60.6475 9.76 62.1195 9.504C63.5915 9.248 65.1755 9.12 66.8715 9.12C70.1995 9.12 72.7275 9.792 74.4555 11.136C76.2155 12.48 77.0955 14.672 77.0955 17.712V32.352H72.6315L72.2955 30.048C71.3675 30.944 70.2155 31.632 68.8395 32.112C67.4955 32.592 65.7995 32.832 63.7515 32.832ZM65.1435 29.088C66.7115 29.088 68.0715 28.832 69.2235 28.32C70.4075 27.776 71.3675 27.056 72.1035 26.16V22.176H64.9035C63.3675 22.176 62.2475 22.48 61.5435 23.088C60.8715 23.664 60.5355 24.56 60.5355 25.776C60.5355 26.96 60.9355 27.808 61.7355 28.32C62.5355 28.832 63.6715 29.088 65.1435 29.088Z'
        fill='#72B2FC'
      />
      <path
        d='M91.5855 32.832C89.1535 32.832 87.3295 32.192 86.1135 30.912C84.9295 29.6 84.3375 27.824 84.3375 25.584V13.68H80.9775V9.6H84.3375V4.368L89.5215 2.784V9.6H95.5695L95.2335 13.68H89.5215V25.296C89.5215 26.608 89.8255 27.536 90.4335 28.08C91.0415 28.592 92.0335 28.848 93.4095 28.848C94.2735 28.848 95.1855 28.688 96.1455 28.368V32.064C94.8975 32.576 93.3775 32.832 91.5855 32.832Z'
        fill='#72B2FC'
      />
      <path
        d='M111.21 32.352V1.44H116.586L126.378 21.456L136.122 1.44H141.498V32.352H136.314V9.936L127.962 27.024H124.794L116.394 9.936V32.352H111.21Z'
        fill='#72B2FC'
      />
      <path
        d='M159.058 32.832C155.09 32.832 152.018 31.856 149.842 29.904C147.666 27.952 146.578 24.96 146.578 20.928C146.578 17.28 147.506 14.4 149.362 12.288C151.218 10.176 154.034 9.12 157.81 9.12C161.266 9.12 163.858 10.032 165.586 11.856C167.346 13.648 168.226 15.968 168.226 18.816V23.04H151.57C151.826 25.248 152.626 26.768 153.97 27.6C155.314 28.432 157.362 28.848 160.114 28.848C161.266 28.848 162.45 28.736 163.666 28.512C164.882 28.288 165.938 28 166.834 27.648V31.488C165.81 31.936 164.626 32.272 163.282 32.496C161.97 32.72 160.562 32.832 159.058 32.832ZM151.57 19.632H163.618V18.048C163.618 16.48 163.186 15.264 162.322 14.4C161.458 13.504 160.002 13.056 157.954 13.056C155.522 13.056 153.842 13.584 152.914 14.64C152.018 15.696 151.57 17.36 151.57 19.632Z'
        fill='#72B2FC'
      />
      <path
        d='M173.319 32.352V9.6H178.119L178.359 12C179.479 11.104 180.711 10.4 182.055 9.888C183.399 9.376 184.839 9.12 186.375 9.12C188.007 9.12 189.271 9.392 190.167 9.936C191.095 10.448 191.799 11.168 192.279 12.096C193.335 11.232 194.551 10.528 195.927 9.984C197.303 9.408 198.951 9.12 200.871 9.12C203.495 9.12 205.431 9.792 206.679 11.136C207.927 12.48 208.551 14.544 208.551 17.328V32.352H203.415V17.856C203.415 16.096 203.047 14.864 202.311 14.16C201.575 13.456 200.375 13.104 198.711 13.104C197.623 13.104 196.583 13.296 195.591 13.68C194.631 14.064 193.799 14.64 193.095 15.408C193.191 15.76 193.255 16.128 193.287 16.512C193.319 16.896 193.335 17.312 193.335 17.76V32.352H188.487V17.904C188.487 16.24 188.199 15.024 187.623 14.256C187.047 13.488 185.959 13.104 184.359 13.104C183.239 13.104 182.167 13.376 181.143 13.92C180.151 14.432 179.255 15.056 178.455 15.792V32.352H173.319Z'
        fill='#72B2FC'
      />
      <path
        d='M224.856 32.832C220.76 32.832 217.752 31.808 215.832 29.76C213.944 27.712 213 24.784 213 20.976C213 17.168 213.96 14.24 215.88 12.192C217.8 10.144 220.792 9.12 224.856 9.12C228.952 9.12 231.96 10.144 233.88 12.192C235.8 14.24 236.76 17.168 236.76 20.976C236.76 24.784 235.8 27.712 233.88 29.76C231.992 31.808 228.984 32.832 224.856 32.832ZM224.856 28.416C227.256 28.416 228.952 27.84 229.944 26.688C230.968 25.504 231.48 23.6 231.48 20.976C231.48 18.352 230.968 16.464 229.944 15.312C228.952 14.16 227.256 13.584 224.856 13.584C222.488 13.584 220.792 14.16 219.768 15.312C218.776 16.464 218.28 18.352 218.28 20.976C218.28 23.6 218.776 25.504 219.768 26.688C220.792 27.84 222.488 28.416 224.856 28.416Z'
        fill='#72B2FC'
      />
    </svg>
  );
}
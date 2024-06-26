interface ClassName {
  className: string;
}

const MessageIcon = (props: ClassName) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <g fill="currentColor">
      <path d="M5 8.75A.75.75 0 0 1 5.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 5 8.75m.75-3.25a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" />
      <path
        fillRule="evenodd"
        d="m2.058 14.934.002-.001.01-.004.037-.017a29 29 0 0 1 .658-.281 22 22 0 0 1 1.649-.616 6 6 0 0 1 .678-.176q.073-.011.113-.015a6.768 6.768 0 1 0-3.028-3.026 1 1 0 0 1-.014.119 5 5 0 0 1-.176.679c-.172.545-.42 1.17-.618 1.646a32 32 0 0 1-.28.65l-.017.036-.004.01v.002a.75.75 0 0 0 .99.994M8.231 2.5a5.269 5.269 0 1 1-2.43 9.944 1.2 1.2 0 0 0-.535-.122 2.4 2.4 0 0 0-.424.038 7 7 0 0 0-.879.225c-.272.085-.557.186-.834.29.103-.275.203-.557.288-.828.096-.302.18-.612.225-.885a2.3 2.3 0 0 0 .037-.428 1.2 1.2 0 0 0-.123-.534 5.27 5.27 0 0 1 4.675-7.7"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const WhatsappIcon = (props: ClassName) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M17 0C8.7 0 2 6.7 2 15c0 3.4 1.1 6.6 3.2 9.2l-2.1 6.4c-.1.4 0 .8.3 1.1.1.2.4.3.6.3.1 0 .3 0 .4-.1l6.9-3.1Q14 30 17 30c8.3 0 15-6.7 15-15S25.3 0 17 0"
      style={{
        fill: "#25d366",
      }}
    />
    <path
      d="M25.7 20.5c-.4 1.2-1.9 2.2-3.2 2.4-.3.1-.6.1-1 .1-.8 0-2-.2-4.1-1.1-2.4-1-4.8-3.1-6.7-5.8V16c-.6-.9-1.7-2.6-1.7-4.4 0-2.2 1.1-3.3 1.5-3.8.5-.5 1.2-.8 2-.8h.5c.7 0 1.2.2 1.7 1.2l.4.8c.3.8.7 1.7.8 1.8.3.6.3 1.1 0 1.6-.1.3-.3.5-.5.7q-.15.3-.3.3l-.2.2c.3.5.9 1.4 1.7 2.1 1.2 1.1 2.1 1.4 2.6 1.6.2-.2.4-.6.7-.9l.1-.2c.5-.7 1.3-.9 2.1-.6.4.2 2.6 1.2 2.6 1.2l.2.1c.3.2.7.3.9.7.4.9.1 2.2-.1 2.9"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);

const ArrowLeftIcon = (props: ClassName) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M20 12H4m0 0 6-6m-6 6 6 6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FaviconSVG = (props: ClassName) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path
      fill="#CCD6DD"
      d="M34 29.096c-.417-.963-.896-2.008-2-2.008h-1c1.104 0 2-.899 2-2.008V8.008A2.004 2.004 0 0 0 31 6H5c-1.104 0-2 .899-2 2.008V25.08c0 1.109.896 2.008 2 2.008H4c-1.104 0-1.667 1.004-2 2.008l-2 4.895C0 35.101.896 36 2 36h32c1.104 0 2-.899 2-2.008z"
    />
    <path
      fill="#9AAAB4"
      d="m.008 34.075.006.057.17.692A2 2 0 0 0 2 36h32a2 2 0 0 0 1.992-1.925z"
    />
    <path
      fill="#5DADEC"
      d="M31 24.075c0 .555-.447 1.004-1 1.004H6c-.552 0-1-.449-1-1.004V9.013c0-.555.448-1.004 1-1.004h24c.553 0 1 .45 1 1.004z"
    />
    <path
      fill="#AEBBC1"
      d="m32.906 31.042-.76-2.175c-.239-.46-.635-.837-1.188-.837H5.11c-.552 0-.906.408-1.156 1.036l-.688 1.977c-.219.596.448 1.004 1 1.004h7.578s.937-.047 1.103-.608c.192-.648.415-1.624.463-1.796.074-.264.388-.531.856-.531h8.578c.5 0 .746.253.811.566.042.204.312 1.141.438 1.782.111.571 1.221.586 1.221.586h6.594c.551 0 1.217-.471.998-1.004"
    />
    <path
      fill="#9AAAB4"
      d="M22.375 33.113h-7.781c-.375 0-.538-.343-.484-.675.054-.331.359-1.793.383-1.963.023-.171.274-.375.524-.375h7.015c.297 0 .49.163.55.489.059.327.302 1.641.321 1.941s-.169.583-.528.583"
    />
  </svg>
);

export { MessageIcon, WhatsappIcon, ArrowLeftIcon, FaviconSVG };

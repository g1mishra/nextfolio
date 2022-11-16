import React from 'react';

type Props = {
  count: number;
  starred?: boolean;
};

const Star = (props: Props) => {
  return (
    <>
      {props.starred ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06073 13.5627L3.77098 16.5237L4.95223 10.5777L0.500977 6.46168L6.52123 5.74768L9.06073 0.242676L11.6002 5.74768L17.6205 6.46168L13.1692 10.5777L14.3505 16.5237L9.06073 13.5627Z"
            fill="#607B96"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06073 14.1795L3.77098 17.1405L4.95223 11.1945L0.500977 7.0785L6.52123 6.3645L9.06073 0.859497L11.6002 6.3645L17.6205 7.0785L13.1692 11.1945L14.3505 17.1405L9.06073 14.1795ZM9.06073 12.4605L12.246 14.2432L11.5342 10.6635L14.214 8.18475L10.5892 7.755L9.06073 4.44075L7.53223 7.75575L3.90748 8.18475L6.58723 10.6635L5.87548 14.2432L9.06073 12.4605V12.4605Z"
            fill="#607B96"
          />
        </svg>
      )}
      <span className="mt-0.5 mr-2">{props.count}</span> <span>stars</span>
    </>
  );
};

export default Star;

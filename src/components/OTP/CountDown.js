import React, { useEffect, useState } from "react";

// component dem nguoc
const CountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.setIsDisableBtn(true); //==0 confirm kh cho ấn nửa
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    //khi set lai gia tri no sẽ clear count cũ ở code timer
    return () => {
      clearInterval(timer);
    };
  }, [count]); //[count] -> count thay đổi sẽ chạy code ở useEffect
  return <div>{count}</div>;
};

// class CountDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 60,
//     };
//   }
//   //ham chay truoc khi -> render -> didUpdate
//   componentDidMount() {
//     //sau 1s thi thuc hien lai no, vong lap vo han
//     this.timer = setInterval(() => {
//       let currentCount = this.state.count;
//       this.setState({
//         count: currentCount - 1,
//       });
//     }, 1000);
//   }

//   //ham so sanh gia tri qkhu va hien tai: den 0 thi kh chay nua, render-> moi den ham nay
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count !== prevState.count && this.state.count === 0) {
//       if (this.timer) {
//         clearInterval(this.timer);
//       }
//     }
//   }
//   render() {
//     return <div>{this.state.count}</div>;
//   }
// }
export default CountDown;

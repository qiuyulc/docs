import { useCallback, useEffect, useState, memo } from "react";

const ButtonCom = memo((props: { onClick: () => void }) => {
  console.log("ButtonCom 重新渲染");
  const { onClick } = props;
  return <button onClick={onClick}>点击获取数据</button>;
});

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 使用useCallback
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  
  // 不使用useCallback
//   const handleClick = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
  useEffect(() => {
    const timer = setInterval(() => {
      setOtherState((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div>{count}</div>
      <div>{otherState}</div>
      <ButtonCom onClick={handleClick}></ButtonCom>
    </>
  );
};

export default CallBack;

/**
 * useCallback
 * 作用：返回一个memoized（记忆）的回调函数，避免每次渲染都重新创建回调函数。
 * 格式：useCallback(fn, deps)
 *      fn：回调函数。
 *      deps：依赖项数组，只有当依赖项数组发生变化时，才会重新生成回调函数。
 * 比对方式：通过Object.is()来比较依赖项数组中的每一项，只有当依赖项数组中的每一项都相等时，才会认为依赖项数组相等。
 * 
 */
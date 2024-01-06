export const useDebounce = (func: Function, timeout = 500) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

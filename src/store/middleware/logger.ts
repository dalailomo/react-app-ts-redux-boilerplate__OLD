const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

export default loggerMiddleware;

declare type Caller = ReturnType<typeof import('./getCaller')>;
declare type Testcase = {
    caller: Caller;
    window: any;
    document: any;
};

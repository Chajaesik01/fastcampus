function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any{
    return a + b;
}

add("hello", "world");
add(1,2);

// 매개변수에 직접 union타입으로 지정
function saySometing(word: string | string[]): string{
    if(typeof(word === "string"))
    {
        return word;
    } else if (Array.isArray(word)){
        return word.join(" ");
    }
    throw new Error("unable to say something");
}

saySometing(["hello", "world"]) // 'hello world'

function saySometing(word: string) : string
function saySometing(words : string[]) : string
function saySometing(word: any): any{
    // 로직은 동일
}
saySometing(["hello", "world"]) // 'hello world'





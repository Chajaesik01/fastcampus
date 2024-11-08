const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "Hello";

// type guard
if (bodyElement) {
    bodyElement.innerHTML = "Hello";
}

function func(arg: string | null){
    return (arg as string).toLowerCase();
}

func('hello');
func(null);
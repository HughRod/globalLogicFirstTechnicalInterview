# GlobalLogic First Technical Interview

After my first technical interview in GlobalLogic went horribly wrong, I decided to solve the exercises that I was challenged with during the interview so I could practice.

## 1.- Produce a StackOverflow exception
```
function printHelloWorldNTimes(n: number) {
    console.log("Hello world!");

    printHelloWorldNTimes(n - 1);
}

printHelloWorldNTimes(10);

```

Although we are specifying the number of times that the `Hello world!` text should be printed out, there is no condition that stops the function from calling itself over and over, which will cause a `StackOverflow` error.

## 2.- Fix the bug in the following exercise

```
function factorial(n) {
    return n * factorial(n);
}
```

### Solution

What frustrates me the most about this one is that, in programming contests, is an exercise you would come across a lot! I am pretty sure I have fixed it before. Here it is my solution:

```
function factorial(n) {
    if(n<=0) {
        return "Please enter a number equal or greater than 1";
    }
    if(n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 0 is " + factorial(0));
console.log("Factorial of 1 is " + factorial(1));
console.log("Factorial of 5 is " + factorial(5));
console.log("Factorial of 10 is " + factorial(10));
```

One key thing that I did not mention is the fact that a second condition is needed, and that is the `if(n===1) { return 1; }` because there is no point in calculating the factorial of 1 when we know beforehand that it is equal to 1, besides it can cause a _stackoverflow_ error.

## 3.- When given two strings, determine whether they are permutations.
Sticking to my first solution where two nested loops were used, here it is what I thought:

```
const string1: string = "aexr";
const string2: string = "rxea";

function arePermutations(string1: string, string2: string): boolean {
    if (string1.length !== string2.length) {
        return false;
    }

    let a: string[] = [];
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if(string1.charAt(i) === string2.charAt(j)) {
                a.push(string1.charAt(i));
                break;
            }
        }
    }

    return a.length === string1.length;
}

console.log("Are " + string1 + " and " + string2 + " permutations? " + arePermutations(string1, string2));
```

However, I still wanted to try something more efficient, and after refreshing my memory (because recursion is something I have done before, and something I was taught in college) and making some research on recursion, this is what I came up with:

```
const string1: string = "aexr";
const string2: string = "eiur";
const comparedStringsArray: string[] = [];

function arePermutations(string1: string, string2: string): boolean {
    if (string1.length !== string2.length) {
        return false;
    }

    for (let i = 0; i < string1.length; i++) {
        counter(0, string1.charAt(i), string2);
    }

    return string1.length === comparedStringsArray.length;
}

function counter(count: number, string1char: string, string2: string) {
    if (count >= string1.length) {
        return;
    }

    if (string2.charAt(count) === string1char) {
        comparedStringsArray.push(string1char);
    }

    counter(count + 1, string1char, string2);
}

console.log("Are " + string1 + " and " + string2 + " permutations? " + arePermutations(string1, string2));

```

## 4.- How would you explain what Scrum is to an 8-year-old who has to do a Robot project?
Scrum is a framework that helps you with the creation of projects. Not just software-related projects, but any project as it has proven useful in any area. I would suggest breaking down all of the tasks that need to be done, even if they are not really refined, and then, once you start working, take a few of those tasks to work on them for the next 2 to 4 weeks. I would suggest, in the beginning of the project, choose a 2-week cycle of work (which is what is known as **Sprint**) because, on early stages of projects, we tend not to understand very well what we are being asked to do (later, once you get a good grasp of the project, you can change it up to a 4-week cycle), and this leads me to asking you this:

### Let's say they gave you four months to deliver the whole project. Would you wait until the very end of those four months to make a single delivery?

The answer is **NO!**

Do not let so much time pass to make a delivery. Remember, you chose either a 2- or 4-week Sprint, so at the end of that Sprint, deliver whatever you have to your teacher so they can check if you are on the right track, and if you are not, you can make adjustments. Sometimes, we understand one thing, but they meant something completely different, and that can happen to all of us. That is why, making deliveries every 2 or 4 weeks ensures that we do not deviate from the objective, which is delivering what they actually asked you to do, and not what you thought they asked for. Besides, keep track of all of those tasks. Many people use a board with columns with different states that you can use to place your tasks on. For example, you could have a **Done** column, and once you are done with one task, remember to move it there. You could try to show this board to your teacher as much as possible so they know how things are going by just looking at it. That ensures **transparency**.

There are many other things that come into play, such as the way you write the tasks to be done (they are usually written in a **user story** format), sizing your tasks, refining your tasks, having meetings with your teammates every day because you are probably not doing it on your own, and more!

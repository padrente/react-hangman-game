const HEAD = (<div className="hangman--head" />)
const BODY = (<div className="hangman--body" />)
const RIGHT_ARM = (<div className="hangman--r-arm" />)
const LEFT_ARM = (<div className="hangman--l-arm" />)
const LEFT_LEG = (<div className="hangman--l-leg" />)
const RIGHT_LEG = (<div className="hangman--r-leg" />)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG]

type HangmanDrawingProps = {numberOfGuesses: number}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return(
        <div className="hangman--drawing">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="hangman--p4" />
            <div className="hangman--p3" />
            <div className="hangman--p2" />
            <div className="hangman--p1" />
        </div>
    )
}
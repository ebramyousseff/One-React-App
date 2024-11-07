import {useState} from 'react'
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti();
import CustomForm from './Component/CustomForm'
import OneThing from './Component/OneThing';

function getSuccessMassage(){
  const massages = ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "FAget about it!"];
  return massages[Math.floor(Math.random() * massages.length)];
}

function App() {
  const [thing, setThing] = useState("")
  const [isCompleted, setIsCompleted]= useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault
    setIsCompleted(true)
  }

  const handleInput = (e)=>{
    setThing(e.target.value)
  }


  const handleCompletedThing = async(e)=>{
    e.target.setAttribute('disabled', true)
    setThing(getSuccessMassage())
    await jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']})
      e.target.removeAttribute('disabled')
      setThing("")
      setIsCompleted(false)


   
  }

  return (
    <main className='grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200'>
      <div className='grid place-items-center gap-8 m-8'>
        {!isCompleted && <CustomForm
        thing={thing}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        />
        }
        {isCompleted && <OneThing
        thing={thing}
        handleCompletedThing={handleCompletedThing}
        />
        
        }
      </div>  
    </main>
  )
}

export default App

type TitleBoxProps ={
    text: string,
}

export default function TitleBox({text}: TitleBoxProps)  {
  return (
    <div className="m-auto lg:px-12 py-1.5 lg:max-w-96 w-64 text-center font-dmserifdisplay font-bold text-lg text-rich-bordeaux border-rich-bordeaux border-2" > 
            {text}
    </div>
  )
}

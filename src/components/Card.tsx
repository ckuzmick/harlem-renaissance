import Image from "next/image"

export default function Card(props) {
    return (
          <div className='card1'>
            <div className='card-1'>
              <div className='front'>
                <Image
                  src={props.imageUrl}
                  width={800/2}
                  height={500/2}
                  alt="Picture of the Cotton Clubr"
                  style={{
                    borderRadius: "2rem"
                  }}
                />
              </div>
              <div className='back'>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
              </div>
            </div>
          </div>
    )
}
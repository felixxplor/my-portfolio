import project1 from '~/assets/images/project1.png'
import Button from '~/components/Button'

export default function Projects() {
  return (
    <div className='grid grid-cols-10 text-textMainColor h-full'>
      <div className='col-span-2 border-r border-borderColor'>
        <div className='flex items-center p-4 border-b border-borderColor'>
          <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg' className='mr-2'>
            <path d='M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z' fill='white' />
          </svg>
          projects
        </div>
        <div className='flex flex-col gap-3 p-4'>
          <div className='flex items-center'>
            <input type='checkbox' name='react' className='h-4 w-4 mr-4 accent-textMainColor' />
            <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_31_81)'>
                <path
                  d='M12 13.755C11.6022 13.755 11.2206 13.597 10.9393 13.3157C10.658 13.0344 10.5 12.6528 10.5 12.255C10.5 11.8572 10.658 11.4756 10.9393 11.1943C11.2206 10.913 11.6022 10.755 12 10.755C12.3978 10.755 12.7794 10.913 13.0607 11.1943C13.342 11.4756 13.5 11.8572 13.5 12.255C13.5 12.6528 13.342 13.0344 13.0607 13.3157C12.7794 13.597 12.3978 13.755 12 13.755ZM11.472 16.749C11.647 16.959 11.823 17.163 12 17.358C12.177 17.163 12.353 16.96 12.528 16.749C12.176 16.7565 11.824 16.7565 11.472 16.749ZM9.477 16.624C8.70906 16.5441 7.9462 16.4212 7.192 16.256C7.117 16.606 7.06 16.946 7.022 17.272C6.832 18.855 7.097 19.817 7.5 20.049C7.903 20.282 8.868 20.03 10.145 19.075C10.408 18.878 10.673 18.659 10.939 18.42C10.4185 17.8491 9.9304 17.2495 9.477 16.624ZM16.808 16.256C16.091 16.416 15.325 16.54 14.523 16.624C14.0696 17.2495 13.5815 17.8491 13.061 18.42C13.327 18.66 13.592 18.878 13.855 19.075C15.132 20.03 16.097 20.282 16.5 20.049C16.903 19.817 17.167 18.855 16.979 17.272C16.9377 16.9309 16.881 16.5919 16.809 16.256H16.808ZM18.258 15.869C18.835 18.508 18.532 20.609 17.25 21.349C15.968 22.089 13.997 21.301 12 19.482C10.003 21.301 8.032 22.088 6.75 21.348C5.468 20.608 5.165 18.508 5.741 15.868C3.167 15.049 1.5 13.735 1.5 12.255C1.5 10.775 3.167 9.462 5.741 8.641C5.165 6.002 5.468 3.901 6.75 3.161C8.032 2.421 10.003 3.209 12 5.028C13.997 3.209 15.968 2.422 17.25 3.162C18.532 3.902 18.835 6.002 18.259 8.642C20.833 9.461 22.5 10.775 22.5 12.255C22.5 13.735 20.833 15.048 18.259 15.869H18.258ZM10.938 6.09C10.6837 5.85981 10.4191 5.64125 10.145 5.435C8.868 4.48 7.903 4.228 7.5 4.461C7.097 4.693 6.833 5.655 7.021 7.238C7.061 7.565 7.117 7.904 7.191 8.254C7.94553 8.08874 8.70872 7.96588 9.477 7.886C9.952 7.233 10.442 6.632 10.939 6.09H10.938ZM14.523 7.886C15.325 7.97 16.091 8.095 16.808 8.254C16.883 7.904 16.94 7.564 16.978 7.238C17.168 5.655 16.903 4.693 16.5 4.461C16.097 4.228 15.132 4.48 13.855 5.435C13.5806 5.64123 13.3156 5.85979 13.061 6.09C13.558 6.632 14.048 7.233 14.523 7.886ZM12.528 7.761C12.353 7.551 12.177 7.347 12 7.152C11.823 7.347 11.647 7.55 11.472 7.761C11.824 7.75353 12.176 7.75353 12.528 7.761ZM8.372 14.959C8.18956 14.6581 8.01352 14.3534 7.844 14.045C7.749 14.302 7.661 14.555 7.581 14.806C7.838 14.862 8.102 14.913 8.371 14.959H8.372ZM10.304 15.193C11.4331 15.2769 12.5669 15.2769 13.696 15.193C14.3332 14.257 14.9001 13.2749 15.392 12.255C14.9001 11.2351 14.3332 10.2531 13.696 9.317C12.5669 9.23314 11.4331 9.23314 10.304 9.317C9.6668 10.2531 9.09991 11.2351 8.608 12.255C9.09991 13.2749 9.6668 14.257 10.304 15.193ZM16.156 10.465C16.251 10.208 16.339 9.955 16.419 9.704C16.1568 9.64712 15.8934 9.5961 15.629 9.551C15.8111 9.85191 15.9868 10.1566 16.156 10.465ZM6.13 10.092C5.79 10.202 5.468 10.322 5.166 10.452C3.701 11.08 3 11.79 3 12.255C3 12.72 3.7 13.43 5.166 14.058C5.468 14.188 5.79 14.308 6.13 14.418C6.352 13.718 6.627 12.992 6.955 12.255C6.63982 11.55 6.36439 10.8278 6.13 10.092ZM7.58 9.704C7.661 9.954 7.749 10.208 7.844 10.464C8.01353 10.156 8.18957 9.85157 8.372 9.551C8.102 9.597 7.838 9.648 7.581 9.704H7.58ZM17.87 14.418C18.21 14.308 18.532 14.188 18.834 14.058C20.299 13.43 21 12.72 21 12.255C21 11.79 20.3 11.08 18.834 10.452C18.5183 10.3175 18.1966 10.1974 17.87 10.092C17.648 10.792 17.373 11.518 17.045 12.255C17.373 12.992 17.648 13.717 17.87 14.418ZM16.42 14.806C16.339 14.556 16.251 14.302 16.156 14.046C15.9865 14.354 15.8104 14.6584 15.628 14.959C15.898 14.913 16.162 14.862 16.419 14.806H16.42Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_31_81'>
                  <rect width='24' height='24' fill='white' transform='translate(0 0.255005)' />
                </clipPath>
              </defs>
            </svg>
            <span className='ml-2'>React</span>
          </div>
          <div className='flex items-center'>
            <input type='checkbox' name='react' className='h-4 w-4 mr-4 accent-textMainColor' />
            <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_31_87)'>
                <path
                  d='M12 18.433L16.62 17.177L17.243 10.399H9.026L8.822 8.145H17.448L17.675 5.934H6.325L6.961 12.612H14.781L14.52 15.478L12 16.145L9.48 15.478L9.322 13.634H7.052L7.381 17.178L12 18.433ZM3 2.255H21L19.377 20.255L12 22.255L4.623 20.255L3 2.255Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_31_87'>
                  <rect width='24' height='24' fill='white' transform='translate(0 0.255005)' />
                </clipPath>
              </defs>
            </svg>

            <span className='ml-2'>HTML5</span>
          </div>
          <div className='flex items-center'>
            <input type='checkbox' name='react' className='h-4 w-4 mr-4 accent-textMainColor' />
            <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_31_90)'>
                <path
                  d='M5 3.255L4.35 6.59501H17.94L17.5 8.755H3.92L3.26 12.085H16.85L16.09 15.895L10.61 17.705L5.86 15.895L6.19 14.255H2.85L2.06 18.255L9.91 21.255L18.96 18.255L20.16 12.225L20.4 11.015L21.94 3.255H5Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_31_90'>
                  <rect width='24' height='24' fill='white' transform='translate(0 0.255005)' />
                </clipPath>
              </defs>
            </svg>

            <span className='ml-2'>CSS</span>
          </div>
        </div>
      </div>
      <div className='col-span-8 w-full'>
        <div className='grid grid-cols-12 gap-5 p-28'>
          <div className='col-span-4'>
            <div className='text-[#4D5BCE] mb-4'>
              Project 1 <span className='text-textMainColor'>// _ecommerce</span>
            </div>
            <a
              href='https://smaller-ecommerce-project.vercel.app/'
              target='_blank'
              className='flex flex-col max-h-[315px] h-full rounded-xl border border-borderColor'
            >
              <div className='h-1/2'>
                <img className='rounded-t-xl w-full h-full object-cover object-top' src={project1} alt='' />
              </div>
              <div className='flex-1 p-4 text-textMainColor h-1/2'>
                <p className='line-clamp-2 leading-8'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat error perferendis maxime
                  nesciunt exercitationem distinctio, quidem, culpa enim debitis quasi odit? Ipsam, nihil eveniet totam
                  laborum quisquam quos id.
                </p>
                <Button className='my-4 py-3 px-3 text-center flex justify-center items-center bg-[#1C2B3A] text-textSecondaryColor text-sm rounded-md'>
                  view-project
                </Button>
              </div>
            </a>
          </div>
          <div className='col-span-4'>
            <div className='text-[#4D5BCE] mb-4'>
              Project 1 <span className='text-textMainColor'>// _ecommerce</span>
            </div>
            <div className='flex flex-col max-h-[315px] h-full rounded-xl border border-borderColor'>
              <div className='h-1/2'>
                <img className='rounded-t-xl w-full h-full object-cover object-top' src={project1} alt='' />
              </div>
              <div className='flex-1 p-4 text-textMainColor h-1/2'>
                <p className='line-clamp-2 leading-8'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat error perferendis maxime
                  nesciunt exercitationem distinctio, quidem, culpa enim debitis quasi odit? Ipsam, nihil eveniet totam
                  laborum quisquam quos id.
                </p>
                <Button className='my-4 py-3 px-3 text-center flex justify-center items-center bg-[#1C2B3A] text-textSecondaryColor text-sm rounded-md'>
                  view-project
                </Button>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[#4D5BCE] mb-4'>
              Project 1 <span className='text-textMainColor'>// _ecommerce</span>
            </div>
            <div className='flex flex-col max-h-[315px] h-full rounded-xl border border-borderColor'>
              <div className='h-1/2'>
                <img className='rounded-t-xl w-full h-full object-cover object-top' src={project1} alt='' />
              </div>
              <div className='flex-1 p-4 text-textMainColor h-1/2'>
                <p className='line-clamp-2 leading-8'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat error perferendis maxime
                  nesciunt exercitationem distinctio, quidem, culpa enim debitis quasi odit? Ipsam, nihil eveniet totam
                  laborum quisquam quos id.
                </p>
                <Button className='my-4 py-3 px-3 text-center flex justify-center items-center bg-[#1C2B3A] text-textSecondaryColor text-sm rounded-md'>
                  view-project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

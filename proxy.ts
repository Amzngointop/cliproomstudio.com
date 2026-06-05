import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Professional-Microphone-Recording-Interview-Livestream/dp/B0C146LJ6G?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=5023b47ce517a9eac06d2cf0cadcdc43&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mini-Mic-Pro-Professional-Microphone/dp/B0CMJTSVRW?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=d7560a5fec53fc7ff4ee4251705ce80f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hollyland-Wireless-Microphone-Intelligent-Magnetic/dp/B0F3CV3RMQ?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=04dcc510c0715fb258b4acab329041db&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hollyland-Wireless-Microphone-Intelligent-Vlogging/dp/B0F31Y1JZ1?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=00198edc4cc4fd51b41fb232275f1c72&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sony-WH-CH720N-Canceling-Headphones-Microphone/dp/B0BS1QCFHX?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=31beeb629bea8efe31f72424660189bb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ALTSON-Portable-Conference-Lighting-Rechargeable/dp/B0C2C9QT91?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=55efa37d32fa5101d2aef7471a8bbede&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Extendable-Sensyne-YouTube-Compatible-Phones/dp/B08B3X7NXC?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=509cb7d829e01c14008646b50f2c6a9d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/UBeesize-Recording%EF%BC%86Live-Streaming-Instagram-Compatible/dp/B08L5VKNWR?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=d493c00d5d2ca3d68aaf2d713b6482f4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NiceVeedi-2800-6500K-Photography-Recording-Streaming/dp/B0BF976MJY?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=40e8d2475eb6530131775dc86bad9ade&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Holders-Stepless-Dimmable-YouTube-Photography/dp/B08JPCSDMP?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=4bf783473e77b4e4d9ba300b43b13f42&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sensyne-Extendable-Wireless-Compatible-Android/dp/B09TQY66NH?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=1b2b68716075fddaf223fe6cbb9240fc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TONEOF-Magnetic-Aluminum-Rotatable-Rechargeable/dp/B0F21QY3H8?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=06cf6774e878c3291ae7ff6a8e84faf6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Upgraded-Solidest-Compatible-Samsung/dp/B09XHZ8F7F?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=3ad27eab9676fdf4a91b6a3f8d173339&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Portable-Lightweight-Recording-Extendable-Compatible/dp/B0DCMQF2SN?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=7d886e29e19d48c71aea57a6a078657c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Liphisy-Tripod-Portable-Recording-Cellphone/dp/B0CMM89Y6Z?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=d88c4857d737e79756ea7fb9d053b242&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Logitech-Desktop-Widescreen-Calling-Recording/dp/B004FHO5Y6?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=bc31e8a3758fc130aba738a4936be0f1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Logitech-Webcam-Meetings-Streaming-Built/dp/B0BXGFFSL1?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=a288fedd920e5304ca40dc4eaa3b677a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EMEET-Microphone-C960-2025-Version/dp/B0DSPJPRXD?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=11e441467eb43be0205ddfb42dfbfbed&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Logitech-C922x-Pro-Stream-Webcam/dp/B01LXCDPPK?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=83850b29877ec58e90390653e34f8ad8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NIVEOLI-1080P-Microphone-Correction-Streaming/dp/B0G29MV7GK?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=4e30995a4b03a57991144c547b669096&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Govee-Control-Segmented-Bluetooth-Changing/dp/B0991Q94KP?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=383823a01fcbad94ca17e70fdf0ca10d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/DAYBETTER-Lights-Bedroom-Indoor-Brithday/dp/B0D4DJ6BRR?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=56eef90791ba5f22cdb92953ed2de737&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Changing-Control-Lighting-Flexible-Decoration/dp/B09V366BDY?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=76ad4f64c20ac76f5dc1df3d4e6254da&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Leeleberd-Bedroom-Changing-Control-Bluetooth/dp/B0C2MHG632?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=efb4b2c89deebb23bb5a3931b1a6c963&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HBOWMDJIA-Application-Changing-Synchronization-Decoration/dp/B0DFYBYPZM?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=80d25ee0cf07342bd9046bd0677b3938&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'clip'


   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}


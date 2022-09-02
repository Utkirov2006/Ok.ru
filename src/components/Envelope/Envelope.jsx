import React from 'react';

import "./Envelope.css"

const Envelope = ({ lang }) => {
   return (
      <div className="envelope">

         <div className="card_envelope bg-white">
            <div className="envelope_main">

               <div className="encelope_bottom d-flex">
                  <i className='fa fa-house m-3'></i>

                  <div class="input-group">
                     <div class="form-outline">
                        <i class="fas fa-search m-3"></i>
                        <input type="text" className='border border-white' placeholder={lang.Search} />


                     </div>
                     <div className="dropdown py-3">
                        <a
                           className="dropdown-toggle d-flex align-items-center hidden-arrow"
                           href="#"
                           id="navbarDropdownMenuAvatar"
                           role="button"
                           data-mdb-toggle="dropdown"
                           aria-expanded="false"
                        >
                           <i class="fa-solid fa-plus"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                           <li>
                              <a className="dropdown-item" href="#">
                                 <i class="fa-solid fa-comment-medical mx-1"></i> 
                           <a href="https://ok.ru/messages/:new-chat">{lang.CreatChat}</a></a>
                           
                              
                           </li>
                           <li>
                              <a className="dropdown-item" href="#"> <i class="fa-solid fa-phone mx-1"></i>
                                 {lang.MakeCall}</a>
                           </li>

                        </ul>
                     </div>


                  </div>

               </div>
               <p className='text-center envelope_p'>{lang.Messages}</p>

            </div>


            <div className="envelope_content d-flex">
               <div className="envelope_left">
                  <div className="box">
                     <img className='m-2 rounded-circle' src="https://i.mycdn.me/image?id=877471242751&t=33&plc=API&ts=00000000000036010b&viewToken=BL_z6xogkAHr4Uj_S4QUBw&tkn=*XOLjPQDNuvA9xFgXuThsafd004k" />
                     <span>{lang.Name}</span>
                  </div>
                  <div className="box">
                     <img className='m-2 rounded-circle' src="https://i.mycdn.me/image?id=892800125070&t=33&plc=API&ts=0000000091000001d7&viewToken=N0S3POb_IxsByeV2ttkc1Q&tkn=*7yw0tFNoWMbZ_DeQKRk7w0gWm5Q" />
                     <span>{lang.Name}</span>
                  </div>
                  <div className="box">
                     <img className='m-2 rounded-circle' src="https://i.mycdn.me/image?id=909084146870&t=33&plc=API&viewToken=vmljPubmjm5ZFNl4Y1z7LQ&tkn=*Dd7shYTurnVesEiJBKKZjqJNe4Q" />
                     <span>{lang.Name}</span>
                  </div>

               </div>
               <div className="envelope_right">
                  <a href="https://ok.ru/messages/594542087191">
                     <img className='m-2 rounded-circle' src="https://i.mycdn.me/image?id=877471242751&t=33&plc=API&ts=00000000000036010b&viewToken=BL_z6xogkAHr4Uj_S4QUBw&tkn=*XOLjPQDNuvA9xFgXuThsafd004k" />
                  </a>
                  <a href="https://ok.ru/messages/579010772622">
                     <img className='m-2 rounded-circle' src="https://i.mycdn.me/image?id=892800125070&t=33&plc=API&ts=0000000091000001d7&viewToken=N0S3POb_IxsByeV2ttkc1Q&tkn=*7yw0tFNoWMbZ_DeQKRk7w0gWm5Q" />
                  </a>
                  <a href="https://ok.ru/messages/c85699272704182">
                     <img className='m-2 rounded-circle' src="https://i.mycdn.me/image?id=909084146870&t=33&plc=API&viewToken=vmljPubmjm5ZFNl4Y1z7LQ&tkn=*Dd7shYTurnVesEiJBKKZjqJNe4Q" />
                  </a>



               </div>
            </div>

         </div>



      </div>
   );
};

export default Envelope;
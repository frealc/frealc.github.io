let datecountdown = new Date(2026, 0, 17, 8).getTime()
            
            let x = setInterval(function(){

                let mtn = new Date().getTime();
                let tpsrestant = datecountdown - mtn;
                let jours = Math.floor(tpsrestant / (1000*60*60*24));
                let heures = Math.floor(tpsrestant % (1000*60*60*24) / (1000*60*60));
                let minutes = Math.floor(tpsrestant % (1000*60*60) / (1000*60));
                let secondes = Math.floor(tpsrestant % (1000*60) / (1000));

                document.querySelector(".countdown").innerHTML =`
                    <div class="boite">
                        <span class="unite">T -</span>
                    </div>
                    <div class="boite">
                        <span class="valeur">${jours}</span>
                        <br>
                        <span class="unite">jours</span>
                    </div>
                    <div class="boite">
                        <span class="valeur">${heures}</span>
                        <br>
                        <span class="unite">heures</span>
                    </div>                    
                    <div class="boite">
                        <span class="valeur">${minutes}</span>
                        <br>
                        <span class="unite">minutes</span>
                    </div>                    
                    <div class="boite">
                        <span class="valeur">${secondes}</span>
                        <br>
                        <span class="unite">secondes</span>
                    </div>
                `;
                if (tpsrestant < 1){
                    clearInterval(x);
                    jours, heures, minutes, secondes= 0
                }
            }, 1000);


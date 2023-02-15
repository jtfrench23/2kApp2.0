function Averages(data){
    console.log(data);
    let i = 0;
    var totalPoints = 0;
    var totalAssists=0;
    var totalSteals=0;
    var totalRebounds=0;
    var totalTurnovers=0;
    var totalBlocks=0;
    var totalFouls=0;
    var totalPointsLoss = 0;
    var totalAssistsLoss=0;
    var totalStealsLoss=0;
    var totalReboundsLoss=0;
    var totalTurnoversLoss=0;
    var totalBlocksLoss=0;
    var totalFoulsLoss=0;
    let winCount= 0;
    let lossCount=0;
    var totalPointsPark = 0;
    var totalAssistsPark=0;
    var totalStealsPark=0;
    var totalReboundsPark=0;
    var totalTurnoversPark=0;
    var totalBlocksPark=0;
    var totalFoulsPark=0;
    var totalPointsLossPark = 0;
    var totalAssistsLossPark=0;
    var totalStealsLossPark=0;
    var totalReboundsLossPark=0;
    var totalTurnoversLossPark=0;
    var totalBlocksLossPark=0;
    var totalFoulsLossPark=0;
    let winCountPark= 0;
    let lossCountPark=0;
    while (i<data.length){
        if(data[i].isRecGame===true){
            if(data[i].isWin===true){
                totalPoints+=data[i].points;
                totalAssists+=data[i].assists;
                totalSteals+=data[i].steals;
                totalBlocks+=data[i].blocks
                totalRebounds+=data[i].rebounds;
                totalTurnovers+=data[i].turnovers;
                totalFouls+=data[i].fouls;
                winCount+=1;
            }else{
                totalPointsLoss+=data[i].points;
                totalAssistsLoss+=data[i].assists;
                totalStealsLoss+=data[i].steals;
                totalBlocksLoss+=data[i].blocks
                totalReboundsLoss+=data[i].rebounds;
                totalTurnoversLoss+=data[i].turnovers;
                totalFoulsLoss+=data[i].fouls;
                lossCount+=1;
                };
        } else {
                if(data[i].isWin===true){
                    totalPointsPark+=data[i].points;
                    totalAssistsPark+=data[i].assists;
                    totalStealsPark+=data[i].steals;
                    totalBlocksPark+=data[i].blocks
                    totalReboundsPark+=data[i].rebounds;
                    totalTurnoversPark+=data[i].turnovers;
                    totalFoulsPark+=data[i].fouls;
                    winCountPark+=1;
                }else{
                    totalPointsLossPark+=data[i].points;
                    totalAssistsLossPark+=data[i].assists;
                    totalStealsLossPark+=data[i].steals;
                    totalBlocksLossPark+=data[i].blocks
                    totalReboundsLossPark+=data[i].rebounds;
                    totalTurnoversLossPark+=data[i].turnovers;
                    totalFoulsLossPark+=data[i].fouls;
                    lossCountPark+=1;
                    };
        }
        i++;
    };
    let value = {
                    'pointsWin': (totalPoints/winCount).toFixed(2), 
                    'assistsWin': (totalAssists/winCount).toFixed(2), 
                    'stealsWin':(totalSteals/winCount).toFixed(2), 
                    'blocksWin':(totalBlocks/winCount).toFixed(2), 
                    'reboundsWin': (totalRebounds/winCount).toFixed(2), 
                    'turnoversWin':(totalTurnovers/winCount).toFixed(2), 
                    'foulsWin':(totalFouls/winCount).toFixed(2), 
                    'pointsLoss': (totalPointsLoss/lossCount).toFixed(2), 
                    'assistsLoss': (totalAssistsLoss/lossCount).toFixed(2), 
                    'stealsLoss':(totalStealsLoss/lossCount).toFixed(2), 
                    'blocksLoss':(totalBlocksLoss/lossCount).toFixed(2), 
                    'reboundsLoss': (totalReboundsLoss/lossCount).toFixed(2), 
                    'turnoversLoss':(totalTurnoversLoss/lossCount).toFixed(2), 
                    'foulsLoss':(totalFoulsLoss/lossCount).toFixed(2),
                    'pwp':(totalPointsPark/winCountPark).toFixed(2),
                    'awp':(totalAssistsPark/winCountPark).toFixed(2),
                    'swp':(totalStealsPark/winCountPark).toFixed(2),
                    'bwp':(totalBlocksPark/winCountPark).toFixed(2),
                    'rwp':(totalReboundsPark/winCountPark).toFixed(2),
                    'twp':(totalTurnoversPark/winCountPark).toFixed(2),
                    'fwp':(totalFoulsPark/winCountPark).toFixed(2),
                    'plp':(totalPointsLossPark/lossCountPark).toFixed(2),
                    'alp':(totalAssistsLossPark/lossCountPark).toFixed(2),
                    'slp':(totalStealsLossPark/lossCountPark).toFixed(2),
                    'blp':(totalBlocksLossPark/lossCountPark).toFixed(2),
                    'rlp':(totalReboundsLossPark/lossCountPark).toFixed(2),
                    'tlp':(totalTurnoversLossPark/lossCountPark).toFixed(2),
                    'flp':(totalFoulsLossPark/lossCountPark).toFixed(2),
                };
    return(value);
};
export default Averages;
get
campaigns()
{
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let curCampaign;
    let prevCampaign;

    if (currentMonth === 12) {
        curCampaign = `V${currentYear + 1}`;
        prevCampaign = `I${currentYear}`;
    } else {
        if (currentMonth < 6) {
            curCampaign = `V${currentYear}`;
            prevCampaign = `I${currentYear - 1}`;
        } else {
            curCampaign = `I${currentYear}`;
            prevCampaign = `V${currentYear}`;
        }
    }
    const campaigns = [prevCampaign, curCampaign];
    return campaigns.map((campaign) => ({id: campaign, value: campaign}));
}

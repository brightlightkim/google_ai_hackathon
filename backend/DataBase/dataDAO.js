import sql from './db.js';

async function savePlan(plan) {
    try{
      console.log(plan);
      const existingPlan = await sql`
          INSERT INTO travelplan (plan)
          VALUES (${plan})
        `;
      
    }catch (error){
      console.error("Error saving a travel plan:", error);
      throw error;
    }

    return 1;
}

async function getPlan(id){
  const plan = await sql`
    select plan
    from travelPlan
    where id = ${id}
  `;

  return plan;
}

export { getPlan, savePlan };

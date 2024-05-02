import sql from './db.js';

async function savePlan(id, plan) {
    try{
      const existingPlan = await sql`
       SELECT id FROM travelPlan WHERE id = ${id}
      `;
      if(existingPlan.length === 0){
        await sql`
          INSERT INTO travelPlan (id, plan)
          VALUES (${id}, ${plan})
        `;
      } else{
        await sql`
        UPDATE travelPlan
        SET plan = ${plan}
        WHERE id = ${id}
      `;
      }
    }catch (error){
      console.error("Error saving travel plan:", error);
      throw error;
    }
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

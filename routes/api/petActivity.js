const router = require('express').Router();
const { ScheduledActivity } = require('../../models');

router.post('/:id'), async (req, res) => {
    // update a tag's name by its `id` value
    try {
        const petData = await ScheduledActivity.update(
            {
                activity_type: req.body.activity_type,
                activity_description: req.body.activity_description,
                time: req.body.time,
                pet_id: req.body.pet_id      
        },

            {
                where: {
                    id: req.params.id
                }
            });

        if (!petData) {
            res.status(404).json({ message: 'No pet found with this id!' });
            return;
        }

        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

import Answer from '../models/anwer.model.mjs';

export async function getAgeAnalytics(req, res) {
  try {
    const result = await Answer.aggregate([
      // Match documents where questionIndex is either 0 or 1
      {
        $match: {
          questionIndex: { $in: [0, 1] }
        }
      },
      // Group by submissionId
      {
        $group: {
          _id: '$submissionId',
          submissionId: { $first: '$submissionId' },
          answer_0: {
            $max: {
              $cond: {
                if: { $eq: ['$questionIndex', 0] },
                then: '$answer',
                else: null
              }
            }
          },
          answer_1: {
            $max: {
              $cond: {
                if: { $eq: ['$questionIndex', 1] },
                then: '$answer',
                else: null
              }
            }
          }
        }
      },
      // Project to merge answers into a single document
      {
        $project: {
          _id: 0,
          submissionId: 1,
          answers: {
            $arrayToObject: {
              $filter: {
                input: [
                  { k: 'age', v: '$answer_0' },
                  { k: 'gender', v: '$answer_1' }
                ],
                as: 'item',
                cond: { $ne: ['$$item.v', null] }
              }
            }
          }
        }
      },
      // Group by gender and count
      {
        $group: {
          _id: '$answers',
          total: { $sum: 1 }
        }
      },
      // Project to format the result
      {
        $project: {
          _id: 0,
          answer: '$_id',
          count: '$total'
        }
      }
    ]);
    res.json({ success: true, length: result.length, result });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: 'something went wrong!'
    });
  }
}

export async function getLocationAnalytics(req, res) {
  try {
    const result = await Answer.aggregate([
      // Match documents where questionIndex is 2
      {
        $match: {
          questionIndex: 2
        }
      },
      // Group by answer and count occurrences
      {
        $group: {
          _id: '$answer',
          count: { $sum: 1 }
        }
      },
      // Project to format the result
      {
        $project: {
          _id: 0,
          answer: '$_id',
          count: 1
        }
      }
    ]);

    res.json({
      success: true,
      result,
      count: result.length
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: 'something went wrong!'
    });
  }
}
export async function getSinghaBeerAnalytics(req, res) {
  try {
    const result = await Answer.aggregate([
      // Match documents where questionIndex is 2
      {
        $match: {
          questionIndex: 3
        }
      },
      // Group by answer and count occurrences
      {
        $group: {
          _id: '$answer',
          count: { $sum: 1 }
        }
      },
      // Project to format the result
      {
        $project: {
          _id: 0,
          answer: '$_id',
          count: 1
        }
      }
    ]);

    res.json({
      success: true,
      result,
      count: result.length
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: 'something went wrong!'
    });
  }
}

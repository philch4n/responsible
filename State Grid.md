-----------------------------------
State Positions and What They Mean
-----------------------------------

|         STATES         | Default |   Driver   |   Loading   |   Match  |     User    |
|------------------------|---------|------------|-------------|----------|-------------|
|      user.isDriver     |  false  |    true    |    either   |   either |     false   |
|      user.isRider      |  false  |    false   |    either   |   either |     true    |
| ride.isWaitingForMatch |  false  |    false   |     true    |   false  |     false   |
|     ride.isMatched     |  false  |    false   |     false   |   true   |     false   |
|    ride.isConfirmed    |  false  |    false   |     false   |   true   |     false   |
|       ride.match       |  null   |    null    |     null    |   true   |     false   |
|      PAGE RENDER       |  Splash | Map/Riders | Map/Loading | Map/Chat | Map/Confirm |



| Components | Settings | Logo | Profile | Cancel | Drive | Ride | Map | Confirm | Loading | Chat | 
|------------|----------|------|---------|--------|-------|------|-----|---------|---------|------|
|   Default  |   yes    |  yes |   yes   |   no   |  yes  |  yes |  no |    no   |    no   |  no  |
|   Driver   |   yes    |  yes |   yes   |   no   |  yes  |  yes |  no |    no   |    no   |  no  |
|   Loading  |   yes    |  yes |   no    |   yes  |   no  |  no  | yes |    no   |    yes  |  no  |
|   Match    |   yes    |  yes |   no    |   yes  |   no  |  no  | yes |    no   |    no   |  yes |
|   User     |   yes    |  yes |   yes   |   yes  |   no  |  no  | yes |    yes  |    no   |  no  |
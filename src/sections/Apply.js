import styled from "styled-components";
import Container from "../components/Container";
import { Button } from "../components/Button";
import { FormattedMessage } from "react-intl";
import { PALETTE } from "../App";


const Apply = () => {
    return (
        <ApplySection>
            <ApplyContainer>
                {/* <Box>
                    <FormattedMessage id="honduras.apply.text" />
                </Box> */}
                <Box>
                    <ApplyButton color={PALETTE.GREEN} href="https://ethkipu.notion.site/ETH-Latam-San-Pedro-Sula-dc72b6e2b81e41ec8f5bebf0cb9bbd6c" target="_blank">
                        <FormattedMessage id="honduras.apply.guide" />
                    </ApplyButton>
                    <ApplyButton color={PALETTE.PINK} href="https://forms.gle/NkQdjaLgCqJnCwXp8" target="_blank">
                        <FormattedMessage id="honduras.apply.sideevents" />
                    </ApplyButton>
                    {/* <ApplyButton color={PALETTE.SKYBLUE} href="https://tally.so/r/mK51Y8" target="_blank">
                        <FormattedMessage id="honduras.apply.volunteer" />
                    </ApplyButton> */}
                </Box>
            </ApplyContainer>
        </ApplySection>
    )
}

const ApplySection = styled.section`
    max-width: 1440px;
    color: #fff;
    margin: auto;
`
const ApplyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media only screen and (max-width: 915px) {
        flex-direction: column;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    flex-wrap: wrap;
    font-size: 24px;
    @media only screen and (max-width: 915px) {
        padding: 15px;
        flex-wrap: wrap;
    }
`

const ApplyButton = styled(Button)`
    padding: 10px 15px;
    margin: 15px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`


export default Apply;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 5em;
  margin-bottom: 20px;
  color: #333;
`;

const TextSection = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 2.6;
  font-size: 30px;
  color: black;
`;

export default function Om() {
  return (
    <Container>
      <Title>Om</Title>
      <TextSection>
        Denne nettsiden er webapplikasjon Cooplanner. Vår webapplikasjon er en utvidelse av Coop sin medlemsapp, designet for å tilby tilpasset måltidsplanlegging og handlelistegenerering til alle Coop-Medlemmer. Denne funksjonaliteten vil gi tilfeldige menyer basert på personifisert informasjon om kundene og kan tilpasses til hver spesifikke Coop-butikk, som Obs, Prix Extra, Marked, Matkroken eller Mega.
      </TextSection>
      <TextSection>
        Konseptet innebærer at brukerne kan få generert en meny basert egne valg av antall dager, og porsjoner basert på tilbud fra Coop-butikkene, varer som er i sesong, eller varer som snart går ut på dato. Dette bidrar til å redusere matsvinn og gir kostnadsbesparelser for kundene. Når en meny er generert, vil applikasjonen automatisk lage en handleliste basert på inventaret i den valgte butikken. Dette betyr at brukerne kan generere en meny og handleliste mens de er på vei til butikken, noe som gjør måltidsplanleggingen mer effektiv, mindre stressende og mer kontroll over matbudsjetter. Webapplikasjonen er designet for å tilby en mer personifisert handleopplevelse, der alle måltidene kommer med detaljerte oppskrifter. Ved å integrere data fra Coop-butikkene, kan applikasjonen foreslå retter som både er økonomiske og tilpasset brukerens preferanser. Gjennom denne løsningen håper vi å forbedre medlemmenes handleopplevelse ved å kombinere bekvemmelighet, personlig tilpasning og bærekraftige valg.
      </TextSection>
    </Container>
  );
}

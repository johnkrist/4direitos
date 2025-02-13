import React from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Menu } from '../../components/Menu';

const ContactContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin: 7%;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  margin-left: 4%;
  font-family: "Josefin Slab", serif;
    font-optical-sizing: auto;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #0066cc;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #b3b3b3;

  .icon {
    color: #0066cc;
  }
`;

const FormSection = styled.div`
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #b3b3b3;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #1c1c1c;
  border: 1px solid #404040;
  border-radius: 6px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  background-color: #1c1c1c;
  border: 1px solid #404040;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const SubmitButton = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0052a3;
  }
`;

const Contact = () => {
  return (<>
      <Menu/>
      <Title>Contato</Title>
      
    <ContactContainer>
      <ContactGrid>
        <InfoSection>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Entre em Contato</h3>
            <p className="text-gray-300 mb-6">
              Estamos à disposição para atender suas necessidades jurídicas.
              Entre em contato conosco para uma consulta inicial.
            </p>
          </div>
          
          <ContactInfo>
            <InfoItem>
              <MapPin className="icon" size={24} />
              <span>Av. 24 de outubro, 1000 - Goiania, GO</span>
            </InfoItem>
            <InfoItem>
              <Phone className="icon" size={24} />
              <span>(29) 1234-5678</span>
            </InfoItem>
            <InfoItem>
              <Mail className="icon" size={24} />
              <span>contato@4diretos.com.br</span>
            </InfoItem>
          </ContactInfo>
        </InfoSection>
        
        <FormSection>
          <Form>
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" />
            </FormGroup>
            <FormGroup>
              <Label>Mensagem</Label>
              <TextArea rows={4} />
            </FormGroup>
            <SubmitButton type="submit">
              Enviar Mensagem
            </SubmitButton>
          </Form>
        </FormSection>
      </ContactGrid>
    </ContactContainer>
  </>
  );
};

export default Contact;
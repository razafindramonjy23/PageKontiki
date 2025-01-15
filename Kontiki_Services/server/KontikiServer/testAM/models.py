from django.db import models

# Create your models here.
class EntretienAM(models.Model): 
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    age = models.IntegerField()
    situation_matrimoniale = models.CharField(max_length=150)
    adresse_actuelle = models.CharField(max_length=255)
    numero_telephone = models.CharField(max_length=15)
    adresse_email = models.EmailField(max_length=255)
    
    #Savoir Formation
    poste_envisage = models.CharField(max_length=100)
    formations_suivies = models.TextField(max_length=255)
    dernier_travail = models.CharField(max_length=100)
    satisfaction_carriere = models.CharField(max_length=150)
    exemples_realisations = models.TextField(max_length=150)
    
    # Ponctualité
    gerer_situation_retard = models.CharField(max_length=150)
    temps_de_retard = models.CharField(max_length=150)
    
    # Tenacite
    raconter_situation_difficile = models.CharField(max_length=550)
    activite_difficile = models.CharField(max_length=250)
    recevoir_critique = models.CharField(max_length=255)
    conflit_interet = models.CharField(max_length=200)
    
    # Intégration
    travail_equipe = models.CharField(max_length=150)
    remarque_negative = models.CharField(max_length=150)
    depasse_situation = models.CharField(max_length=150)
    
    # Sens du Service
    objectif_collegue = models.CharField(max_length=150)
    autre_tache = models.CharField(max_length=150)
    initiative = models.CharField(max_length=150)
    
    # Autonomie
    travailler_seul = models.CharField(max_length=250)
    demande_client = models.CharField(max_length=150)
    
    # Organisation
    organiser_bureau = models.CharField(max_length=250)
    
    # Satisfaction
    satisfaction_ancien_poste = models.CharField(max_length=50)
    poste_ideal = models.CharField(max_length=100)
    salaire = models.CharField(max_length=255)
    traite = models.CharField(max_length=255)
    remunere = models.CharField(max_length=255)
    travailler_soir = models.CharField(max_length=255)
    competence_aporte = models.CharField(max_length=255)
    
    # Test
    redaction_email_colab = models.CharField(max_length=555)
    strategie_convincre = models.CharField(max_length=555)
    choix_long_term = models.CharField(max_length=555)
    cinq_marque_frs_femme = models.CharField(max_length=555)
    cinq_marque_frs_homme = models.CharField(max_length=555)